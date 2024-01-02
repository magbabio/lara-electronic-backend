const router = require('express').Router();
const usersController = require('../controllers/usersController');
const { authRequired } = require('../middlewares/validateToken');

router.post('/create', authRequired, usersController.createUser);
router.put('/update/:id', authRequired, usersController.updateUser);
router.delete('/delete/:id', authRequired, usersController.deleteUser);
router.put('/activate/:id', authRequired, usersController.activateUser);
router.get('/getUser/:id', authRequired, usersController.getUser);
router.get('/getAll', authRequired, usersController.getAllUsers);

module.exports = router;
