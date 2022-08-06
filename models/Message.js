const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Message extends Model {};

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // username: {
    //     type: DataTypes.STRING,
    //     references: {
    //         model: 'user',
    //         key: 'username',
    //       },
    // },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
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
