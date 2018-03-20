const db = require('../models/index');
const Account = db.Account;
const User = db.User;
const auth = require('../middleware/auth');




// Recieves an authenticated linkedin profile id 
// find user profile for linkedin account and return ||
// registers new user and returns user profile
const AccessRequest = (req, res) => {

    const CreateProfile = (account) => {
        User.create({
                AccountId: account,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                headline: req.body.headline,
                industry: req.body.industry,
                pictureUrl: req.body.pictureUrl,
                summary: req.body.summary
        }).then( user => {
            if(!user){res.error("error creating user profile")}
            else if(user){
                console.log('user profile has been created, lets set up an auth token');
                console.log(user);
                this.generateToken(user);
            }
        });
    };
    const Login = (account) => {
        // locate user profile for account
        User.findOne({ 
            where:{
                AccountId: account.id
            }
        }).then(user => {
            if (!user){
                console.log('error finding profile');
                res.error('couldnt locate a profile');
            } else if (user){
                console.log('user profile found. lets make an auth token');
                this.generateToken(user);
            }
        });
    };
    const Register = () => {
        Account.create({
            linkedInId: req.body.id
        })
        .then( account => {
            if ( !account ) {
                res.error('error creating account')
            }
            if ( account ) {
                // create a profile for the account
                console.log('account created');
                CreateProfile(account[0].dataValues.id);
            }
        });
    };


    const generateToken = (user) => {
        console.log('lets make a token');
        console.log(user);
        let token = auth.createJWT( user );
        console.log(token);
        res.json({user, token});
    }

    Account.findOne({
        where: {
            linkedInId: req.body.id
        }
    }).then(account => {
        if(!account){
            console.log('no account found. lets make one');
            this.Register();
        }
        else if(account){
            const acc = account[0].dataValues;
            this.Login(acc)
        }
    });
};












// Recieves an authenticated linkedin profile id 
// find user profile for linkedin account and return ||
// registers new user and returns user profile
const Login = ( req, res ) => {
    Account.findOne({
        where: { linkedInId : req.body.id }
    })
    .then( acc => {

        if(!acc){
            // if no account is found
            console.log('no account');
        }
        else if(acc) {
            // variable for account info
            const account = acc[0].dataValues
            // locate user profile for account
            User.findOne({ 
                where:{
                    AccountId: account.id
            }
            })
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
        }
    });
};


module.exports = {
    AccessRequest
}


