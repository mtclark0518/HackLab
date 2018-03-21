const db = require('../models/index');
const Account = db.Account;
const User = db.User;
const auth = require('../middleware/auth');


const getProfile = (req, res) => {
    console.log('hi')
    res.json('hi');
}

module.exports = {
    getProfile
}