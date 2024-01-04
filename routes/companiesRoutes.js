const router = require('express').Router();
const companiesController = require('../controllers/companiesController');
const { authRequired } = require('../middlewares/validateToken');
const { isAdmin } = require('../middlewares/auth');

router.post('/create', authRequired, companiesController.createCompany);
router.put('/update/:id', authRequired, companiesController.updateCompany);
router.delete('/delete/:id', authRequired, companiesController.deleteCompany);
router.put('/activate/:id', authRequired, companiesController.activateCompany);
router.get('/getCompany/:id', authRequired, companiesController.getCompany);
router.get('/getAll', authRequired, companiesController.getAllCompanies);
router.get('/getAllDeleted', authRequired, companiesController.getAllDeletedCompanies);

module.exports = router;
