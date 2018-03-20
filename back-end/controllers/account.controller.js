const db = require('../models/index');
const Account = db.Account;
const User = db.User;
const auth = require('../middleware/auth');


const Locate = (user) => {
    Account.findOne({
        where: {
            linkedInId: user
        }
    }).then(account => {
        if (!account){
            return false;
        }
    });
};
const Register = (req, res) => {
    console.log(req)
}
// Recieves an authenticated linkedin profile id 
// find user profile for linkedin account and return ||
// registers new user and returns user profile
const Login = ( req, res ) => {
    Account.findOrCreate({
        where: { linkedInId : req.body.id }
    })
    .then( acc => {
        // variable for account info
        const account = acc[0].dataValues
        // locate user profile for account
        User.findOne({where:{
            AccountId: account.id
        }})
        .then( user => {
            if(user){
                // response with account as json
                res.json(user);
            } else {
                // create new user profile from the request info
                User.create({
                    AccountId: account.id,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    headline: req.body.headline,
                    industry: req.body.industry,
                    pictureUrl: req.body.pictureUrl,
                    summary: req.body.summary
                })
                .then( (user, error) => {
                    if (error) return console.log('errror: ' + error);
                    // respond with newly created user profile
                    res.json(user);
                });
            }
        });
    });
};


module.exports = {
    Login
}


