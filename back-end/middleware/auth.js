const jwt = require('jsonwebtoken');
const _ = require('lodash');
require('dotenv').config();

const header = {
    "typ":"JWT",
    "alg":"HS256"
}

const verifyJWTToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err || !decodedToken) {
            return reject(err);
        }
        resolve(decodedToken);
        });
    });
};

const createJWToken = (details) => {
    // formats the argument into an object
    if (typeof details !== 'object') {
        details = {}
    }
    // if our token details don't have a number value set that here
    // setting it for just 5 min right now for testing
    if (!details.maxAge || typeof details.maxAge !== 'number') {
        details.maxAge = 300
    }

    details.sessionData = _.reduce(details.sessionData || {}, (memo, val, key) => {
        if (typeof val !== "function" && key !== "password") {
        memo[key] = val
        }
        return memo
    }, {});

    let token = jwt.sign({
            details: details.sessionData
        }, 
        process.env.JWT_SECRET,
        {
            header: header,
            issuer: process.env.JWT_ISSUER,         
            expiresIn: details.maxAge,
        }
    )
    console.log(token);
    return token
}

const handleJWT = (req, res, next) => {
    let token = (req.method === 'POST') ? req.body.token : req.query.token;

    verifyJWTToken(token)
        .then((decodedToken) => {
            req.user = decodedToken.data;
            next()
        })
        .catch((err) => {
            res.status(400).json( { message: "Invalid auth token provided." } );
        })
}

export default {verifyJWTToken, createJWToken, handleJWT}