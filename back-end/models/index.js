require('dotenv').config();
const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || process.env.DEV_DATABASE_URL, {
    dialect: process.env.DATABASE_DIALECT,
    operatorsAliases : false
});
const Account = sequelize.import('./account');
const User = sequelize.import('./user');
const Project = sequelize.import('./project');

Account.hasOne(User);
User.belongsTo(Account);
Project.hasMany( User, { as: 'members' });
User.belongsToMany( Project, { through: 'ProjectMembership' });

const db = { Account, User, Project };

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;