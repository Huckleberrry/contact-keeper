const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { body, validationResult, check } = require('express-validator');

const User = require('../models/User');
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

router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
],
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }


    const { email, password} = req.body;

    try {
        let user = await User.findOne({email});

        if(!user) {
            return res.status(400).json({msg: 'Invalid Credentials'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({msg: 'Invalid Credentials'});
        }

        const payload = {
            user: {
                id: user.id
            }
        };
        // here we set the time limit on our password
        jwt.sign(payload, config.get('jwtSecret'),{
            expiresIn: 360000
        },(err, token) => {
            if(err) throw err;
            res.json({ token });
        } )
        ;

    } catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

    module.exports = router; // "/" points to API/USERS