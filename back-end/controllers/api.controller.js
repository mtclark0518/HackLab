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
    console.log("hitting the updatedProfile route!");
    console.log("req.body ");
    console.log(req.body);
    res.send('route was hit. for now thats it')
    
    // User.findOne({
    //     where: {
    //         AccountId: req.user.id
    //     }
    // })
    // .then( user => {
    //     // console.log(user);
    //     if(user){
    //         //update the database
    //         res.json(user);
    //     }
    //     if(!user){ 
    //         res.json({message:"problem finding the user profile"});
    //     }
    // });
};

const getProject = ( req, res ) => {
    // TODO
}

// Create new project
const createProject = ( req, res ) => {
    const proj = req.body;
    console.log(proj)
    // Project.create({
        // TODO
    // })
    res.send('route was hit. for now thats it')
}

module.exports = {
    getProfile,
    updateProfile,
    createProject
};