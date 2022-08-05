const { FileFamily } = require('../models');

const fileFamilyData = [
    {
        file_id: 1,
        family_id: 3, 
    },
    {
        file_id: 2,
        family_id: 3, 
    },
    {
        file_id: 3,
        family_id: 3, 
    },
    {
        file_id: 4,
        family_id: 3, 
    },
    {
        file_id: 5,
        family_id: 3, 
    },
    {
        file_id: 6,
        family_id: 3, 
    },
    {
        file_id: 7,
        family_id: 2, 
    },
    {
        file_id: 8,
        family_id: 2, 
    },
    {
        file_id: 9,
        family_id: 2, 
    },
    {
        file_id: 10,
        family_id: 1, 
    },
];

const seedFileFamilyData = () => FileFamily.bulkCreate(fileFamilyData);

module.exports = seedFileFamilyData;