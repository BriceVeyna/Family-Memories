const sequelize = require('../config/connection');
const { User } = require('../models');

const seedFamilyData = require('./family-seeds.js');
const userData = require('./user-seeds.json');
const seedFileData = require('./file-seeds.js');
const seedCommentData = require('./comment-seeds.js');
const seedFileFamilyData = require('./filefamily-seed.js');
const seedUserFamilyData = require ('./userfamily-seed.js');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedFamilyData();
    console.log('seeded family data')
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log('seeded user data')
    await seedFileData();
    console.log('seeded file data')
    await seedCommentData();
    console.log('seeded comment data')
    await seedFileFamilyData();
    console.log('seeded file family data')
    await seedUserFamilyData();
    console.log('seeded user family data')

    process.exit(0);
}

seedDatabase();