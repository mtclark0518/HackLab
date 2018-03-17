const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://t@localhost:5432/gaac');



const User = sequelize.import('./profile');
const Profile = sequelize.import('./profile');
const Project = sequelize.import('./profile');


User.hasOne(Profile);
Profile.belongsTo(User);



const db = {};
db.User = User;
db.Profile = Profile;
db.Project = Project;

module.exports = db;