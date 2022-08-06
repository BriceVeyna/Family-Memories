// Import relevant parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import database connection
const sequelize = require('../config/connection');

// Initialize UserFamily model (table) by extending off Sequelize's Model class
class UserFamily extends Model {}

// Set up fields and rules for UserFamily through model
UserFamily.init(
  {
    // Define columns
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
