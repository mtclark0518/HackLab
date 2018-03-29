const db = require('../models/index');
const Account = db.Account;
const User = db.User;
const Project = db.Project;

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


// update one user profile
const updateProfile = (req, res) => {
    User.findOne({
        where: {
            AccountId: req.user.id
        }
    })
    .then( user => {
        if(!user){ 
            res.json({message:"problem finding the user profile"});
        }
        if(user){
            user.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                headline: req.body.headline,
                industry: req.body.industry,
                pictureUrl: req.body.pictureUrl,
                summary: req.body.summary,
                location: req.body.location,
                interestCategories: req.body.interestCategories,
                bootcampCohort: req.body.bootcampCohort
            }).then( update => {
                if(!update){
                    res.json({message: "error in updating profile"});
                }
                res.json(update);
            });
        }
    });
};

const getProject = ( req, res ) => {
    // TODO
};

// Create new project
const createProject = ( req, res ) => {
    const proj = req.body;
    console.log(proj)
    // Project.create({
        // TODO
    // })
    res.send('route was hit. for now thats it')
};

module.exports = {
    getProfile,
    updateProfile,
    createProject
};