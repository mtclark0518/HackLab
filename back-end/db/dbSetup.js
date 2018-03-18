// var Sequelize = require('sequelize');
// const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://t@localhost:5432/gaac', null, null, {
//     dialect: 'postgres',
//     operatorsAliases : false
// });
var db = require('../models/index');


db.sequelize.sync({ force: true })
    .then( () => {
        process.exit();
    });