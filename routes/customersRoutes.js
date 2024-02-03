const router = require('express').Router();
const customersController = require('../controllers/customersController');
const { authRequired } = require('../middlewares/validateToken');

router.post('/create', customersController.createCustomer);
router.put('/update/:id', customersController.updateCustomer);
router.delete('/delete/:id', customersController.deleteCustomer);
router.put('/activate/:id', customersController.activateCustomer);
router.get('/getCustomer/:id', customersController.getCustomer);
router.get('/getAll', customersController.getAllCustomers);
router.get('/getAllDeleted', customersController.getAllDeletedCustomers);
router.get('/getCustomerByDocument/:document_type/:document_number', customersController.getCustomerByDocument);

module.exports = router;
