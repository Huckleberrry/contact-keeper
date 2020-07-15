const express = require('express');
const router = express.Router();

/* Signature for routes
@route GET api/auth
@desc Get logged in user
@access Private
*/

router.get('/', (req,res) => {
    res.send('Get logged in user')
});
/* Signature for routes
@route POST api/auth
@desc auth user and get token
@access Public
*/

router.post('/', (req,res) => {
    res.send('Log in user')
});

    module.exports = router; // "/" points to API/USERS