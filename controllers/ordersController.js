const { Order, Equipment } = require('../models');
const response = require('../utils/responses');
const { Sequelize } = require('sequelize');

const createOrder = async (req, res) => {

  try {

    const { 
      customer_id,
      company_id,
      user_id,
      number, 
      receipt_date, 
      observations,
      notes, 
      order_status, 
      equipment,
    } = req.body;

    const order = await Order.findOne({ 
      where: 
      { number, 
        status: true } 
    });
    
    if (order) {

      response.makeResponsesError(res, `Order found`, 'OrderFound')

      } else {
      
      const newOrder = await Order.create({
        customer_id,
        company_id,
        user_id,
        number,
        receipt_date,
        observations,
        notes,
        order_status,
      });

      for (const item of equipment) {
        await Equipment.create({
            description: item.description,
            brand: item.brand,
            model: item.model,
            serial: item.serial,
            observations: item.observations,
            arrived_image: item.arrived_image,
            // left_image: item.left_image,
            // delivery_date: item.delivery_date,
            repair_cost: item.repair_cost,
            equipment_status: item.equipment_status,
            order_id: newOrder.id
        });
    }
      const saveOrder = await newOrder.save();

      response.makeResponsesOkData(res, saveOrder, 'OrderCreated')

      }

  } catch (error) {

    console.log(error);
        
    response.makeResponsesError(res, error, 'UnexpectedError')

  }
}

module.exports = {
  createOrder: createOrder,
};