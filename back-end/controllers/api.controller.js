const db = require('../models/index');
const Account = db.Account;
const User = db.User;
const auth = require('../middleware/auth');


const getProfile = (req, res) => {
    console.log(req.user)
    User.findOne({
        where: {
            AccountId: req.user.id
        }
    })
    .then( user => {
        if(user){
            console.log(user)
            res.json(user)
        }
        if(!user){ res.json({message:"problem finding the user profile"})}
    })
}

module.exports = {
    getProfile
}