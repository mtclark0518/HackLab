const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://t@localhost:5432/gaac');

const Account = sequelize.import('./account');
const User = sequelize.import('./user');
const Project = sequelize.import('./project');

Account.hasOne(User);
User.belongsTo(Accout);

Project.belongsTo(User, {as: 'owner'});
User.hasMany(Project);

Project.hasMany(User, {as: 'members'});
User.belongsToMany(Project)

const db = {User,Profile,Project};

module.exports = db;