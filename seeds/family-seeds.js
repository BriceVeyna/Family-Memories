const {Family} = require('../models');

const familyData = [
    {
        name: 'Besse'
    },
    {
        name: 'Burnham'
    },
    {
        name: 'Veyna'
    },
];

const seedFamilyData = () => Family.bulkCreate(familyData);

module.exports = seedFamilyData;