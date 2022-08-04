const User = require('./User');
const Family = require('./Family');
const File = require('./File');
const Comment = require('./Comment');

Family.hasMany(User, {
    foreignKey: 'family_id',
    onDelete: 'CASCADE',
});

User.belongsToMany(Family, {
    foreignKey: 'family_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(File, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

File.belongsTo(User, {
    foreignKey: 'user_id',
});

File.hasMany(Comment, {
    foreignKey: 'file_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(File, {
    foreignKey: 'file_id',
});

Family.hasMany(File, {
    foreignKey: 'family_id',
    onDelete: 'CASCADE',
});

File.belongsToMany(Family, {
    foreignKey: 'family_id',
});

module.exports = { User, Family, File, Comment };