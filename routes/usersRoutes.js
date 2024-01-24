const router = require('express').Router();
const usersController = require('../controllers/usersController');
const { authRequired } = require('../middlewares/validateToken');
const { isAdmin } = require('../middlewares/auth');

router.post('/create', usersController.createUser);
router.put('/update/:id', usersController.updateUser);
router.delete('/delete/:id', usersController.deleteUser);
router.put('/activate/:id', usersController.activateUser);
router.get('/getUser/:id', usersController.getUser);
router.get('/getAll', usersController.getAllUsers);
router.get('/getAllDeleted', usersController.getAllDeletedUsers);

module.exports = router;
