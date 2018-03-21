const jwt = require('jsonwebtoken');
require('dotenv').config();

const header = {
    "typ":"JWT",
    "alg":"HS256"
}

const verifyJWTToken = (token) => 
{
    return new Promise((resolve, reject) => 
    {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => 
        {
            if (err || !decodedToken)
            {
                console.log('error verifying jwt')
                return reject(err);
            }
            console.log('inside of jwt verify callback')
            resolve(decodedToken);
        });
    });
};

const createJWToken = (details) => 
{
    // formats the argument into an object
    if (typeof details !== 'object') 
    {
        details = {}
    }
    let token = jwt.sign(
    {
        details: 
        {
            id: details.AccountId,
            name: `${details.firstName} ${details.lastName}`
        }
    }, 
    process.env.JWT_SECRET, 
    {
        header: header,
        issuer: process.env.JWT_ISSUER,         
        expiresIn: 60000,
    });
    console.log(token);

    return token
}

const checkJWT = (req, res, next) => 
{
    console.log('who\'s trying to see at my data???');
    if( req.headers && req.headers.authorization)
    {
        const token = req.headers.authorization.split(' ');
        if (token[0] == 'JWT')
        {
            verifyJWTToken(token[1])
            .then( decodedToken =>
            {
                console.log(decodedToken)
                req.user = decodedToken.details;
                console.log(req.user)
                next();
            })
            .catch( err => 
            {
                res.status(400).json( { message: "Invalid auth token provided." } );
            });
        }
    }
    else
    {
        res.status(400).json( { message: "No authorization header provided"} );
    }
};

module.exports = {verifyJWTToken, createJWToken, checkJWT}