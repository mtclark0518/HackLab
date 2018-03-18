/*
 *  Setup the db (init the tables to default/empty )
 */
var Sequelize = require('sequelize');
var db = require('../models');

db.sequelize.sync( { force: true } )
    .then( () => {
        process.exit();
    });