const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserFamily extends Model {}

UserFamily.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    family_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'family',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_family',
  }
);

module.exports = UserFamily;
