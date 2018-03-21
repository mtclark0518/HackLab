const jwt = require('jsonwebtoken');
const ms = require('ms');
require('dotenv').config();


// called by the middleware function when user makes a request to the api
const verifyJWTToken = (token) => 
{
    return new Promise((resolve, reject) => 
    {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => 
        {
            if (err || !decodedToken)
            {
                console.log('nooope, unsuccessful jwt verification');
                return reject(err);
            }
            console.log('aight you good this time')
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
    // sets header as per docs
    const header = 
    {
        "typ":"JWT",
        "alg":"HS256"
    }
    // signing method
    const token = jwt.sign
    ({
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
        expiresIn: ms('30 days'),
    });
    return token;
};

// middleware function triggered by user request to api 
const checkJWT = (req, res, next) => 
{
    console.log('who\'s trying to see at my data???');
    // the token is stored in authorization headers
    if( req.headers && req.headers.authorization)
    {
        // split the string into a two item array 
        const token = req.headers.authorization.split(' ');
        // first item is the jwt type
        if (token[0] == 'JWT')
        {
            // second item is the actual token
            verifyJWTToken(token[1])
            .then( decodedToken =>
            {
                // saving the decoded information to the request and passing it on
                req.user = decodedToken.details;
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
        // should only get here if we don't even have a header in the request
        res.status(400).json( { message: "No authorization header provided"} );
    }
};

module.exports = {verifyJWTToken, createJWToken, checkJWT}