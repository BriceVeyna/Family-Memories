const { INTEGER } = require('sequelize');
const {File} = require('../models');

const fileData = [
    {
        name: "1973_Snow on Mother's Day",
        description: '-Jerry, Jeanette, family vacation in the mountains. Playing in snow -Esther here too -Snowball fight between Jerry and the kids -Jeanette and Esther getting food ready -Randy taking pictures -Randy on tractor with Joe (I think) -Might rescan this one to correct framing and try to improve the quality.',
        url: 'https://drive.google.com/file/d/16Bg5ZQhgnLv169izVqPKjHhOm21w1mxX/preview',
        user_id: 1,
        family_id: 3,
    },
    {
        name: '1974_4-H Slough_Koch Family',
        description: "-Kids in innertubes floating down slough -Lady gardening, Jean Brown -Colleen, Steve and Lisa (?) playing with what appears to be a mini pool table -4-H event, looks like Collen is carrying a banner -Some sort of 4-H ceremony, Randy is given something on stage -Five kids watching TV, presumably this is the Koch's visiting",
        url: 'https://drive.google.com/file/d/11ztLxl-kX_mZn8sP5krTuY6KobiYDtcb/preview',
        user_id: 2,
        family_id: 3,
    },
    {
        name: '1974_4H Guide Dogs',
        description: '-4-H guide dog show -Colleen leading Frisco -Frisco, Colleen and maybe Steve swimming in slough',
        url: 'https://drive.google.com/file/d/1UWdX8Ijwgq1qVR2M-G891HTenCgbcLa7/preview',
        user_id: 3,
        family_id: 3,
    },
    {
        name: '1974_Cleaning Walnut Dryer_Dairy Parade_4H Guide Dog',
        description: `-Ken getting into a machine -Randy and Ken cleaning a machine -Parade floats going down street -4-H guide dog float “A Blind Man's Splendor” -4-H booth “Oakdale 4-H County Splendor” -Collen and Frisco on stage -Dark footage of cows in barn`,
        url: 'https://drive.google.com/file/d/19kLaNhq8DW8yvldGPMW1MmYQ7nbhzbwD/preview',
        user_id: 1,
        family_id: 3,
    },
    {
        name: '1974_Dogs_Easter',
        description: '-Colleen, Steve and Randy with two dogs-Frisco and ? -Easter egg hunt, lots of kids -Kids with bikes on a basketball court, Randy milling about',
        url: 'https://drive.google.com/file/d/1VjbwgOS_G3-2tevLMvSR4YfvkV3mhbzE/preview',
        user_id: 2,
        family_id: 3,
    },
    {
        name: '1974_Dogs',
        description: '-Steve with dog -Colleen and Steve hosing off dogs -Footage of tree, pretty foggy -film goes bad, nothing visible so film cuts here.',
        url: 'https://drive.google.com/file/d/1vAVsJCcj1lh8LHs1794WYRyE5bgssyxf/preview',
        user_id: 3,
        family_id: 3,
    },
    {
        name: 'chelsea name 1',
        description: 'chelsea descr 1',
        url: '',
        user_id: 2,
        family_id: 2,
    },
    {
        name: 'chelsea2',
        description: 'chelsea descr 2',
        url: '',
        user_id: 2,
        family_id: 2,
    },
    {
        name: 'chelsea3',
        description: 'chelsea descr 3',
        url: '',
        user_id: 2,
        family_id: 2,
    },
    {
        name: 'phil1',
        description: 'phil descr 1',
        url: '',
        user_id: 3,
        family_id: 1,
    },
]

const seedFileData = () => File.bulkCreate(fileData);

module.exports = seedFileData;