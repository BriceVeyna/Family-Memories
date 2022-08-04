const sequelize = require('../config/connection');
const { User } = require('../models');

const seedFamilyData = require('./family-seeds.js');
const userData = require('./user-seeds.json');
const seedFileData = require('./file-seeds.js');
const seedCommentData = require('./comment-seeds.js');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    await seedFamilyData();
    await seedFileData();
    await seedCommentData();

    process.exit(0);
}

seedDatabase();