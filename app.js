const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();

const port = process.env.PORT || 4000
const FRONTEND_URL = process.env.FRONTEND_URL;
const app = express();

app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);
app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`Server is running on ${process.env.PORT}`)
})

module.exports = app;