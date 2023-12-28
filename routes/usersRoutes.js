const router = require('express').Router();
const usersController = require('../controllers/usersController');

router.post('/create', usersController.createUser);

module.exports = router;
