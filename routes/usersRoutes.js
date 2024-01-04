const router = require('express').Router();
const usersController = require('../controllers/usersController');
const { authRequired } = require('../middlewares/validateToken');
const { isAdmin } = require('../middlewares/auth');

router.post('/create', authRequired, usersController.createUser);
router.put('/update/:id', authRequired, usersController.updateUser);
router.delete('/delete/:id', authRequired, usersController.deleteUser);
router.put('/activate/:id', authRequired, usersController.activateUser);
router.get('/getUser/:id', authRequired, usersController.getUser);
router.get('/getAll', authRequired, usersController.getAllUsers);
router.get('/getAllDeleted', authRequired, usersController.getAllDeletedUsers);

module.exports = router;
