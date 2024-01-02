'use strict'

const router = require('express').Router()

router.use('/auth', require('./authRoutes'))
router.use('/users', require('./usersRoutes'))

module.exports = router