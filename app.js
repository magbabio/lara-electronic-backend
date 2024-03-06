const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes');
const { exec } = require('child_process');

require('dotenv').config();

const port = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL;
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', FRONTEND_URL);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);
app.use(morgan('dev'));

// Deshacer todas las migraciones existentes
exec('npx sequelize-cli db:migrate:undo:all', (error, stdout, stderr) => {
  if (error) {
    console.error('Error al deshacer las migraciones existentes:', error);
    return;
  }
  console.log('Migraciones anteriores deshechas correctamente');
  
  // Ejecutar migraciones y seeders
  exec('npx puppeteer browsers install chrome && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all', (error, stdout, stderr) => {
    if (error) {
      console.error('Error al ejecutar migraciones y seeders:', error);
      return;
    }
    console.log('Migraciones y seeders ejecutados correctamente');
    
    // Iniciar el servidor
    app.listen(port, () => {
      console.log(`Servidor iniciado en el puerto ${port}`);
    });
  });
});

module.exports = app;