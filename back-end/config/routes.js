const   router = require('express').Router(),
        Access = require('../controllers/access.controller'),
        Auth = require('../middleware/auth'),
        Api = require('../controllers/api.controller');

// access controller only has one route which is used if login is required
router.post('/access/request', Access.AccessRequest);

// at least for now all other routes go through the api controller
// set router to verify authorization token on api controller requests

// route 'api/profile' ------------------------------- *
router.get('/api/profile', Auth.checkJWT, Api.getProfile);



// route 'api/project' ------------------------------- *
router.post('/api/project', Auth.checkJWT, Api.createProject);



module.exports = router;