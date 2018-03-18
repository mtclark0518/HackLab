const db = require('../models/index');

const Account = db.Account;
const User = db.User;



createNew = (req,res) => {
    console.log(req.body);
}


module.exports = {
    createNew
}