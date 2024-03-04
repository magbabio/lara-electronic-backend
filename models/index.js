const Sequelize = require('sequelize');
const config = require('../config/config.json');

// Reads the configuration corresponding to the current environment
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Create the Sequelize instance using the configuration
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  port: dbConfig.port
});

sequelize.options.logging = false

const DataTypes = Sequelize.DataTypes; // Obtain Sequelize data types

// Import models
const User = require('./User')(sequelize, DataTypes);
const Company = require('./Company')(sequelize, DataTypes);
const Customer = require('./Customer')(sequelize, DataTypes);
const Equipment = require('./Equipment')(sequelize, DataTypes);
const Order = require('./Order')(sequelize, DataTypes);
const Role = require('./Role')(sequelize, DataTypes);

// Define las asociaciones entre los modelos si es necesario
User.associate({ Order });
Company.associate({ Order });
Customer.associate({ Order });
Equipment.associate({ Order });
Order.associate({ Customer, Company, User, Equipment });

module.exports = {
  sequelize,
  User,
  Company,
  Customer,
  Equipment,
  Order,
  Role
};