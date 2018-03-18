const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://t@localhost:5432/gaac', {
    dialect: 'postgres',
    operatorsAliases : false
});
const Account = sequelize.import('./account');
const User = sequelize.import('./user');
const Project = sequelize.import('./project');

Account.hasOne(User);
User.belongsTo(Account);

Project.hasMany( User, {
    as: 'members'
});

User.belongsToMany( Project, {
    through: 'ProjectMembership'
});

const db = { Account:Account, User:User, Project:Project };
db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;