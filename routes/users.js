const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');

const User = require('../models/User');

/* Signature for routes
@route POST api/users
@desc Registera user
@access Public 
*/

router.post('/', [
    check('name','Please add Name').not().isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({
        min: 6
    })
], (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
// will display a "passed" when all validation is complete ( passwords,emails,etc)
    res.send('passed');
});  // "/" points to API/USERS

module.exports = router;  //  "/" points to API/USERS
