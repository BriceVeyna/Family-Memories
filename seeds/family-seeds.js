const {Family} = require('../models');

const familyData = [
    {
        name: 'Mitchell'
    },
    {
        name: 'Veyna'
    },
];

const seedFamilyData = () => Family.bulkCreate(familyData);

module.exports = seedFamilyData;