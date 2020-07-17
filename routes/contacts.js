
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult} = require('express-validator/check');

const User = require('../models/User');
const Contact = require('../models/Contact');

/* Signature for routes
@route GET api/contacts
@desc Get all users contacts
@access Private ( need to be logged in to interact with contacts)
*/
router.get('/', auth, async (req,res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id}).sort({
            date: -1 
        });
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')

    }
});
/* Signature for routes
@route POST api/contacts
@desc Add new contact
@access Private 
*/
router.post(
'/',
[
    auth, 
    [
        check('name', 'Name is required')
        .not()
        .isEmpty()
]
],
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }


    const { name,email,phone,type} = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        })

        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
/* Signature for routes

this will update contacts
specific which contact you want to delete or update.

@route PUT api/contacts
@desc Add new contact
@access Private 
*/
router.put('/:id', (req,res) => {
    res.send('Update contact')
});

/* Signature for routes

this will Delete contacts
specific which contact you want to delete or update.

@route delete api/contacts/:id
@desc Delete contact 
@access Private 
*/
router.delete('/:id', (req,res) => {
    res.send('Delete contact')
});




module.exports = router;
