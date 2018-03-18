// This file can be run to reset the database tables
var db = require('../models/index');
db.sequelize.sync({ force: true })
    .then( () => {
        process.exit();
    });