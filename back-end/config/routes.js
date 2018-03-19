const   router = require('express').Router(),
        Accounts = require('../controllers/account.controller');




// request a user profile
router.post('/api/profile', Accounts.Login);

module.exports = router;