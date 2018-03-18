const router = require('express').Router();
const user = require('./user')

router.post('/api/profile/create', user)

module.exports = router;