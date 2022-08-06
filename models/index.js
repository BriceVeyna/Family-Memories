const User = require('./User');
const Family = require('./Family');
const File = require('./File');
const Comment = require('./Comment');
const UserFamily = require('./UserFamily');
const FileFamily = require('./FileFamily');
const Message = require('./Message');


Family.hasMany(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.belongsToMany(Family, {
    through: UserFamily
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
    through: FileFamily
});

User.hasMany(Message, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});


Message.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Family, File, Comment, FileFamily, UserFamily, Message };