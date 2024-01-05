const router = require('express').Router();
const ordersController = require('../controllers/ordersController');
const { authRequired } = require('../middlewares/validateToken');

router.post('/create', authRequired, ordersController.createOrder);

module.exports = router;
