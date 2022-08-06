// Import relevant parts of sequelize library
const { Model, DataTypes, Sequelize } = require('sequelize');
// Import database connection
const sequelize = require('../config/connection');

// Initialize Comment model (table) by extending off Sequelize's Model class
class Comment extends Model {}

// Set up fields and rules for Comment model
Comment.init(
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
        text: {
            type: DataTypes.TEXT,
        },
        file_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'file',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;
