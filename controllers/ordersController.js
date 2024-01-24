const { Order, Equipment, Company, Customer, User } = require('../models');
const response = require('../utils/responses');
const puppeteer = require('puppeteer');
const fs = require('fs');
const { Sequelize } = require('sequelize');
const { imageUpload } = require('../utils/multer');
const { generatePDF } = require('../utils/documents');
const { orderDocument } = require('../utils/assets/OrderDocumentHTML');

const createOrder = async (req, res) => {

  try {

    const { 
      customer_id,
      company_id,
      user_id,
      number, 
      receipt_date, 
      observations,
      order_status, 
      equipment,
    } = req.body;

    if (!equipment || equipment.length === 0) {

      return response.makeResponsesError(res, `Error`, 'EquipmentNotFound');

    } else {

      const order = await Order.findOne({ 
        where: 
        { number, 
          status: true } 
      });
      
      if (order) {
  
        response.makeResponsesError(res, `Order found`, 'OrderFound')
  
        } else {
        
        const order = await Order.create({
          customer_id,
          company_id,
          user_id,
          number,
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
        
    response.makeResponsesError(res, error, 'UnexpectedError')

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

      return response.makeResponsesError(res, `Order not found`, 'OrderNotFound')

    } else {

    const data = req.body;

    const saveOrder = await order.update(data, {
      where: { id: req.params.id }
    });

    const existingEquipment = await Equipment.findAll({ where: { order_id: req.params.id } });
    
    const existingEquipmentIds = existingEquipment.map((item) => item.id);
                
    const equipmentToDelete = existingEquipmentIds.filter((itemId) => !equipment.some((item) => item.id === itemId));
    await Equipment.destroy({ where: { id: equipmentToDelete } });

    for (const item of conceptos) {
        await Equipment.create({ 
          order_id: order.id,
          description: item.description,
          brand: item.brand,
          model: item.model,
          serial: item.serial,
          observations: item.observations,
          // arrived_image: `${basePath}${filename}`,
          // left_image: item.left_image,
          delivery_date: item.delivery_date,
          repair_cost: item.repair_cost,
          equipment_status: item.equipment_status,
        });
      }    

    response.makeResponsesOkData(res, saveOrder, 'OrderUpdated')

    }

  } catch (error) {
    
    response.makeResponsesError(res, error, 'UnexpectedError')

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
      }
    });

    if (!order) {
      return response.makeResponsesError(res, `Order not found`, 'OrderotFound');
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
      let contentHtml = '';
      let pdfName = '';
      let pdfBuffer;

      contentHtml = orderDocument(order);

      pdfBuffer = await generatePDF(contentHtml);

      pdfName = 'Orden.pdf';

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `inline; filename="${pdfName}"`);
      res.send(pdfBuffer);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Ha ocurrido un error al generar el PDF' });
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
  generateOrderDocument: generateOrderDocument
};