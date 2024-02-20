const router = require('express').Router();
const ordersController = require('../controllers/ordersController');
const { authRequired } = require('../middlewares/validateToken');
const { imageUpload } = require('../utils/multer');

router.post('/create', imageUpload.single('file'), ordersController.createOrder);
router.get('/generateOrderDocument/:id', ordersController.generateOrderDocument);
router.get('/sendOrderEmail/:id', ordersController.sendOrderEmail);
router.put('/update/:id', ordersController.updateOrder);
router.delete('/delete/:id', ordersController.deleteOrder);
router.put('/activate/:id', ordersController.activateOrder);
router.get('/getOrder/:id', ordersController.getOrder);
router.get('/getAll', ordersController.getAllOrders);
router.get('/getAllDeleted', ordersController.getAllDeletedOrders);
router.get('/searchOrderByEquipmentSerial/:serial', ordersController.searchOrderByEquipmentSerial);

module.exports = router;
