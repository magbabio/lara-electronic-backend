const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

require('dotenv').config();

const port = process.env.PORT || 4000
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);
app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`Server is running on ${process.env.PORT}`)
})

module.exports = app;