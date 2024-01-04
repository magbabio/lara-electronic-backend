const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authRequired } = require('../middlewares/validateToken');

router.post('/login', authController.login);
router.post('/logout', authRequired, authController.logout);

module.exports = router;
