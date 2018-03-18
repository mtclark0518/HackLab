const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../models/index');

const Account = db.Account;
const User = db.User;

// Recieves an authenticated linkedin profile id 
// returns user profile for linkedin account
// registers new user and returns user profile if initial login
const Login = ( req, res ) => {
    console.log(req.body);
    Account.findOrCreate({
        where: { linkedInId : req.body.id }
    })
    .then( (account) => {
        if(findUser(account[0].dataValues.id)){}
        createUser(account[0].dataValues.id, req.body)

    })
    .then(user => {
        res.json(user);
    });
};


module.exports = {
    Login
}

// PRIVATE METHODS

// check if user exists for account returns user || false
const findUser =  account  => {
    if(!account){
        console.log('new account')
    }
    User.findOne({where:{
        AccountId: account
    }}).then(user => {
        if(!user){return false}
        else return user;
    })
}

// returns new user with linkedin profile information
const createUser =  (id, account)  => {
    console.log(account);
    User.create({
        AccountId: id,
        firstName: account.firstName,
        lastName: account.lastName,
        headline: account.headline,
        industry: account.industry,
        pictureUrl: account.pictureUrl,
        summary: account.summary

    })
    .then( (user, error) => {
        if (error) console.log('errror: ' + error);
        console.log('user created'); console.log(user);
        return user;
    });
};


