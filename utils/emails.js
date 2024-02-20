// const nodemailer = require('nodemailer')
// const html = require('./assets/OrderEmailHTML')
// require('dotenv').config()

// const user = process.env.USER.toString()
// const pass = process.env.PASS.toString()

// const mail = process.env.MAIL_USERNAME.toString()

// let transporte = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   auth: {
//     user: user,
//     pass: pass
//   }, 
//   tls: {
//     rejectUnauthorized: false
//   }
// })

// function sendEmail(email, password) {
//   message = {
//     from: mail,
//     to: email,
//     subject: 'Orden de servicio - LARA ELECTRÓNICA C.A.'
//     html: html,
//   }
// }