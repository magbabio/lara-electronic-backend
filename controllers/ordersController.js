const { Order, Equipment, Company, Customer, User } = require('../models');
const { Op } = require('sequelize');
const response = require('../utils/responses');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const { Sequelize } = require('sequelize');
const config = require('../config/config.json');
const { imageUpload } = require('../utils/multer');
const { generatePDF } = require('../utils/documents');
const { orderDocument } = require('../utils/assets/OrderDocumentHTML');
const { orderEmail } = require('../utils/assets/OrderEmailHTML');
require('dotenv').config()

// Obtén la configuración correspondiente al entorno de desarrollo
const dbConfig = config.development;

// Crea una instancia de Sequelize utilizando la configuración
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port
  }
);

const createOrder = async (req, res) => {

  try {

    const { 
      customer_id,
      company_id,
      user_id, 
      receipt_date, 
      observations,
      order_status, 
      equipment,
    } = req.body;

    if (!equipment || equipment.length === 0) {

      return response.makeResponsesError(res, `Error`, 'EquipmentNotFound');

    } else {

      const lastOrder = await Order.findOne({
        order: [['number', 'DESC']],
      });

      let orderNumber;

      if (lastOrder) {
        // Si hay una orden existente, incrementa el número en 1
        orderNumber = (parseInt(lastOrder.number) + 1).toString().padStart(6, '0');
      } else {
        // Si no hay órdenes existentes, establece el número inicial en '000001'
        orderNumber = '000001';
      }

      const order = await Order.findOne({ 
        where: 
        { number: orderNumber,
          status: true } 
      });
      
      if (order) {
  
        response.makeResponsesError(res, `Order found`, 'OrderFound')
  
        } else {
        
        const order = await Order.create({
          customer_id,
          company_id,
          user_id,
          number: orderNumber.toString().padStart(6, '0'),
          receipt_date,
          observations,
          order_status,
        });
  
        for (const item of equipment) {
  
          // const file = req?.file;

          // console.log(file);
  
          // if (!file) {
          //   return response.makeResponsesError(res, `Error`, "ImageError")
          // }
    
          // const filename = file?.filename;
          // const basePath = `${req.protocol}://${req.get('host')}/LaraElectronica-Backend/public/images`;       
    
          await Equipment.create({
              order_id: order.id,
              description: item.description,
              brand: item.brand,
              model: item.model,
              serial: item.serial,
              repair_concept: item.repair_concept,
              observations: item.observations,
              // arrived_image: `${basePath}${filename}`,
              // left_image: item.left_image,
              delivery_date: item.delivery_date,
              repair_cost: item.repair_cost,
              equipment_status: item.equipment_status,
          });
      }

        response.makeResponsesOkData(res, order, 'OrderCreated')
  
        }

    }

  } catch (error) {

    console.log(error);

    if (error.name === 'SequelizeValidationError') {
      const validationErrors = error.errors.map((err) => err.message);
      response.makeResponsesError(res, validationErrors.join(', '), 'UnexpectedError');
    } else {
      response.makeResponsesError(res, error.message, 'UnexpectedError');
    }

  }
}

const updateOrder = async (req, res) => {
  try {  
    const id = req.params.id;
    const order = await Order.findOne({
      where: {
        id: id,
        status: true
      }
    });

    if (!order) {
      return response.makeResponsesError(res, `Order not found`, 'OrderNotFound');
    } else {
      const data = req.body;

      const existingEquipment = await Equipment.findAll({ where: { order_id: req.params.id } });

      const existingEquipmentIds = existingEquipment.map((equipment) => equipment.id);

      const equipmentToDelete = existingEquipmentIds.filter((equipmentId) => !req.body.equipment.some((item) => item.id === equipmentId));
      
      await Equipment.destroy({ where: { id: equipmentToDelete } });

      for (const item of req.body.equipment) {
        if (item.id) {
          // Si el equipo tiene un identificador, actualízalo
          await Equipment.update(
            {
              description: item.description,
              brand: item.brand,
              model: item.model,
              serial: item.serial,
              repair_concept: item.repair_concept,
              observations: item.observations,
              delivery_date: item.delivery_date,
              repair_cost: item.repair_cost,
              equipment_status: item.equipment_status
            },
            { where: { id: item.id } }
          );
        } else {
          // Si el equipo no tiene un identificador, créalo como nuevo
          await Equipment.create({ 
            order_id: order.id,
            description: item.description,
            brand: item.brand,
            model: item.model,
            serial: item.serial,
            repair_concept: item.repair_concept,
            observations: item.observations,
            delivery_date: item.delivery_date,
            repair_cost: item.repair_cost,
            equipment_status: item.equipment_status
          });
        }
      }

      const saveOrder = await order.update(data, {
        where: { id: req.params.id }
      });

      response.makeResponsesOkData(res, saveOrder, 'OrderUpdated');
    }
  } catch (error) {
    console.log(error)
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = error.errors.map((err) => err.message);
      response.makeResponsesError(res, validationErrors.join(', '), 'UnexpectedError');
    } else {
      response.makeResponsesError(res, error.message, 'UnexpectedError');
    }
  }
}

const deleteOrder = async (req, res) => {

  try {

    const id = req.params.id;

    const order = await Order.findOne({
      where: {
        id: id,
        status: true
      }
    });

    if (!order) {
      return response.makeResponsesError(res, `Order not found`, 'OrderNotFound')
    }

    const existingEquipment = await Equipment.findAll({ where: { order_id: req.params.id } });

    for (const equipment of existingEquipment) {
      await equipment.update({ status:false });
    }

    const saveOrder = await order.update({
      status: false,
      deleted_at: Date.now(),
      where: { id }
    });

    response.makeResponsesOkData(res, saveOrder, 'OrderDeleted')


  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

const activateOrder = async (req, res) => {

  try {

    const id = req.params.id;

    const order = await Order.findOne({
      where: {
        id: id,
        status: false
      }
    });

    if (!order) {
      return response.makeResponsesError(res, `Order not found or active`, 'OrderNotFound')
    }

    const existingEquipment = await Equipment.findAll({ where: { order_id: req.params.id } });

    for (const equipment of existingEquipment) {
      await equipment.update({ status: true });
    }

    const saveOrder = await order.update({
      status: true,
      where: { id }
    });

    response.makeResponsesOkData(res, saveOrder, 'OrderActivated')


  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

const getOrder = async (req, res) => {
  try {
    const id = req.params.id;

    const order = await Order.findOne({
      where: {
        id: id,
        status: true
      },
      include: [
        { model: Company },
        { model: Customer },
        { model: User },
        { model: Equipment }
      ]
    });

    if (!order) {
      return response.makeResponsesError(res, `Order not found`, 'OrderNotFound');
    }

    return response.makeResponsesOkData(res, order, 'Success');

  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

const getAllOrders= async (req, res) => {
  try {

    const orders = await Order.findAll({
      where: {
        status: true
      },
      include: Equipment,
      order: [['created_at', 'DESC']]
    });

    if (orders.length == 0) {
      return response.makeResponsesError(res, 'Not found', 'OrdersNotFound');
    }

    response.makeResponsesOkData(res, orders, 'Success')

  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

const getAllDeletedOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: {
        status: false
      },
      include: Equipment,
      order: [['deleted_at', 'DESC']]
    });

    if (orders.length == 0) {
      return response.makeResponsesError(res, 'Not found', 'OrdersNotFound');
    }

    response.makeResponsesOkData(res, orders, 'Success')

  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

const generateOrderDocument = async (req, res) => {
  try {
    const id = req.params.id;
    const order = await Order.findOne({
      where: {
        id: id,
        status: true
      },
      include: [
        { model: Company },
        { model: Customer },
        { model: User },
        { model: Equipment }
      ]
    });
    if (!order) {

      return response.makeResponsesError(res, `Order not found`, 'OrderNotFound');
      
    } else {
      const contentHtml = orderDocument(order);
      const pdfName = `${order.number}.pdf`;
      const outputPath = path.join(__dirname, '..', 'public', 'docs', pdfName);
      const pdfBuffer = await generatePDF(contentHtml);

      fs.writeFileSync(outputPath, pdfBuffer);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `inline; filename="${pdfName}"`);
      res.send(pdfBuffer);
    }
  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});

const sendOrderEmail = async (req, res) => {
  try {
    const id = req.params.id;
    const order = await Order.findOne({
      where: {
        id: id,
        status: true
      },
      include: [
        { model: Company },
        { model: Customer },
        { model: User },
        { model: Equipment }
      ]
    });
    if (!order) {

      return response.makeResponsesError(res, `Order not found`, 'OrderNotFound');
      
    } else { 
      const contentHtml = orderDocument(order);
      const pdfName = `${order.number}.pdf`;
      const outputPath = path.join(__dirname, '..', 'public', 'docs', pdfName);

      const emailData = {
        title: `Orden de servicio`,
        customerName: `${order.Customer.first_name} ${order.Customer.last_name}`,
        companyName: order.Company.name,
        companyPhone: order.Company.phone
      };

      const emailContent = orderEmail(emailData);

      const pdfBuffer = await generatePDF(contentHtml, outputPath);

      const attachments = [
        {
          filename: 'Orden de servicio.pdf',
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ];

      const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: order.Customer.email,
        subject: `Ha recibio una orden de servicio - ${order.Company.name}`,
        html: emailContent,
        attachments: attachments
      };

      await transporter.sendMail(mailOptions);

      return response.makeResponsesOkData(res, `Order sent`, 'OrderEmailSent');

    }
  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError')
  }
}

const searchOrderByEquipmentSerial = async (req, res) => {
  try {
    const { serial } = req.params;

    const orders = await Order.findAll({
      include: [
        {
          model: Equipment,
          where: {
            serial: {
              [Op.iLike]: `%${serial}%`,
            },
          },
        },
      ],
    });

    response.makeResponsesOkData(res, orders, 'Success');
  } catch (error) {
    response.makeResponsesError(res, error, 'UnexpectedError');
  }
};



module.exports = {
  createOrder: createOrder,
  updateOrder: updateOrder,
  deleteOrder: deleteOrder,
  activateOrder: activateOrder,
  getOrder: getOrder,
  getAllOrders: getAllOrders,
  getAllDeletedOrders: getAllDeletedOrders,
  generateOrderDocument: generateOrderDocument,
  sendOrderEmail: sendOrderEmail,
  searchOrderByEquipmentSerial: searchOrderByEquipmentSerial
};