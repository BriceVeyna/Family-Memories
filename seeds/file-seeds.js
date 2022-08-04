const { INTEGER } = require('sequelize');
const {File} = require('../models');

const fileData = [
    {
        name: 'file 1',
        description: 'descr 1',
        url: '',
        user_id: 1,
        family_id: 1,
    },
    {
        name: 'file 2',
        description: 'descr 2',
        url: '',
        user_id: 2,
        family_id: 2,
    },
    {
        name: 'file 3',
        description: 'descr 3',
        url: '',
        user_id: 3,
        family_id: 2,
    },
    {
        name: 'file 4',
        description: 'descr 4',
        url: '',
        user_id: 1,
        family_id: 2,
    },
    {
        name: 'file 5',
        description: 'descr 5',
        url: '',
        user_id: 2,
        family_id: 1,
    },
    {
        name: 'file 6',
        description: 'descr 6',
        url: '',
        user_id: 3,
        family_id: 1,
    },
]

const seedFileData = () => File.bulkCreate(fileData);

module.exports = seedFileData;