'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    document_type: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Document type is required'
        },
        isIn: {
          args: [['J', 'V', 'E', 'G']],
          msg: 'Document type must be J, V, E or G'
        },
        len: {
          args: [1, 1],
          msg: 'Document type must have a length of 1'
        }
      }
    },
    document_number: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Document number is required'
        },
        len: {
          args: [1, 10],
          msg: 'Document number must have a length between 1 and 10'
        }
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'First name is required'
        },
        len: {
          args: [1, 255],
          msg: 'First name must have a length between 1 and 255'
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Last name is required'
        },
        len: {
          args: [1, 255],
          msg: 'Last name must have a length between 1 and 255'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Phone is required'
        },
        len: {
          args: [1, 255],
          msg: 'Phone must have a length between 1 and 255'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Email is required'
        },
        isEmail: {
          msg: 'Email is not valid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Password is required'
        },
        // len: {
        //   args: [8, 16],
        //   msg: 'Password must have a length between 8 and 16'
        // }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue: 'standard',
      validate: {
        isIn: {
          args: [['standard', 'superuser']],
          msg: 'Role must be "standard" or "superuser"'
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true,
      validate: {
        notNull: {
          msg: 'Status is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};