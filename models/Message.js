// Import relevant parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import database connection
const sequelize = require('../config/connection');

// Initialize Message model (table) by extending off Sequelize's Model class
class Message extends Model {};

// Set up fields and rules for Message model
Message.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        // references: {
        //     model: 'user',
        //     key: 'username',
        //   },
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // },
    text: {
      type: DataTypes.TEXT,
    //   allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'message',
  }
);

module.exports = Message;
