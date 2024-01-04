const router = require('express').Router();
const customersController = require('../controllers/customersController');
const { authRequired } = require('../middlewares/validateToken');

router.post('/create', authRequired, customersController.createCustomer);
router.put('/update/:id', authRequired, customersController.updateCustomer);
router.delete('/delete/:id', authRequired, customersController.deleteCustomer);
router.put('/activate/:id', authRequired, customersController.activateCustomer);
router.get('/getCustomer/:id', authRequired, customersController.getCustomer);
router.get('/getAll', authRequired, customersController.getAllCustomers);
router.get('/getAllDeleted', authRequired, customersController.getAllDeletedCustomers);

module.exports = router;
