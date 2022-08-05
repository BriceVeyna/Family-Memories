const { UserFamily } = require('../models');

const userFamilyData = [
    {
        user_id: 1,
        family_id: 3
    },
    {
        user_id: 2,
        family_id: 2
    },
    {
        user_id: 3,
        family_id: 1
    },

]


const seedUserFamilyData = () => UserFamily.bulkCreate(userFamilyData);

module.exports = seedUserFamilyData;