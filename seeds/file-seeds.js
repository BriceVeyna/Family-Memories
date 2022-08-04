const { INTEGER } = require('sequelize');
const {File} = require('../models');

const fileData = [
    {
        name: '',
        description: '',
        url: '',
        user_id: INTEGER,
        family_id: INTEGER,
    },
    {
        name: '',
        description: '',
        url: '',
        user_id: INTEGER,
        family_id: INTEGER,
    },
    {
        name: '',
        description: '',
        url: '',
        user_id: INTEGER,
        family_id: INTEGER,
    },
    {
        name: '',
        description: '',
        url: '',
        user_id: INTEGER,
        family_id: INTEGER,
    },
    {
        name: '',
        description: '',
        url: '',
        user_id: INTEGER,
        family_id: INTEGER,
    },
    {
        name: '',
        description: '',
        url: '',
        user_id: INTEGER,
        family_id: INTEGER,
    },
]

const seedFileData = () => File.bulkCreate(fileData);

module.exports = seedFileData;