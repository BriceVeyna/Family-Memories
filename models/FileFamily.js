// Import relevant parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import database connection
const sequelize = require('../config/connection');

// Initialize FileFamily model (table) by extending off Sequelize's Model class
class FileFamily extends Model {}

// Set up fields and rules for FileFamily through model
FileFamily.init(
  {
    // Define columns
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
