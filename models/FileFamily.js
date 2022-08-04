const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class FileFamily extends Model {}

FileFamily.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    file_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'file',
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
    modelName: 'file_family',
  }
);

module.exports = FileFamily;
