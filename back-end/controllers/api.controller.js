const db = require('../models/index');
const Account = db.Account;
const User = db.User;


// IN ALL API.CONTROLLER METHODS REQ.USER.ID WILL HOLD THE ACCOUNT_ID

// show one user profile
const getProfile = (req, res) => {
    User.findOne({
        where: {
            AccountId: req.user.id
        }
    })
    .then( user => {
        if(user){
            res.json(user);
        }
        if(!user){ 
            res.json({message:"problem finding the user profile"});
        }
    });
};

module.exports = {
    getProfile
};