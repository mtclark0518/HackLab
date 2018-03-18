const   router = require('express').Router(),
        Accounts = require('../controllers/account.controller');




// creates a new user profile
router.post('/api/profile/create', Accounts.Login);

module.exports = router;