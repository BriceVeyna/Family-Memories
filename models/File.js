// Import relevant parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// Import database connection
const sequelize = require("../config/connection");

// Initialize File model (table) by extending off Sequelize's Model class
class File extends Model {}

// Set up fields and rules for File model
File.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    family_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'family',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "file",
  }
);

module.exports = File;
