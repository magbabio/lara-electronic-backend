'use strict'

const router = require('express').Router()

router.use('/auth', require('./authRoutes'))
router.use('/users', require('./usersRoutes'))
router.use('/companies', require('./companiesRoutes'))
router.use('/customers', require('./customersRoutes'))
router.use('/orders', require('./ordersRoutes'))

module.exports = router