const db = require('../models/index');
const Account = db.Account;
const User = db.User;
const Auth = require('../middleware/auth');


// Recieves an authenticated linkedin profile id 
// Depending on the request we will handle the response accordingly
const AccessRequest = (req, res) => {
    // If an account exists we just need to grab the profile, & generate their access token
    const Login = (account) => {
        // locate user profile for account
        User.findOne({ 
            where:{
                AccountId: account.id
            }
        })
        .then( user => {
            if (!user){
                res.error('couldnt locate a profile');
            } else if (user) {
                console.log('user profile found. lets make an auth token');
                GenerateToken(user);
            }
        });
    };
    // If this is first use we will set up a new account
    const Register = () => {
        Account.create({
            linkedInId: req.body.id
        })
        .then( account => {
            if ( !account ) {
                res.error('error creating account')
            }
            if ( account ) {
                // create a user profile for the account
                console.log('registered account, passing to create profile')
                CreateProfile(account.dataValues.id);
            }
        });
    };
    // this creates a user profile
    const CreateProfile = (account) => {
        User.create({
                AccountId: account,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                headline: req.body.headline,
                industry: req.body.industry,
                pictureUrl: req.body.pictureUrl,
                summary: req.body.summary
        })
        .then( user => {
            if(!user){ res.error("error creating user profile"); }
            else if (user) {
                console.log('user profile has been created, lets set up an auth token');
                GenerateToken(user);
            }
        });
    };

    // creates an access token and sends this back to the client
    const GenerateToken = user => {
        console.log('lets make a token');
        const token = Auth.createJWToken( user.dataValues );
        const data = {
            token: token
        }
        // Whether registering or logging in the success response comes from here
        res.json(data);
    };
    
    // This is the initialization of the request process
    // <<<----------------------------------------------------------------->>> //
    Account.findOne({
        where: {
            linkedInId: req.body.id
        }
    })
    .then( account => {
        if(!account) {
            console.log('no account found. lets make one');
            Register();
        }
        else if (account) {
            console.log('account found. passing to login');
            const acc = account.dataValues;
            Login(acc);
        }
    });
    // <<<----------------------------------------------------------------->>> //
};
module.exports = {
    AccessRequest
};


