const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

require('dotenv').config();

const port = process.env.PORT || 4000
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on ${process.env.PORT}`)
})

module.exports = app;