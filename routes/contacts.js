
const express = require('express');
const router = express.Router();

/* Signature for routes
@route GET api/contacts
@desc Get all users contacts
@access Private ( need to be logged in to interact with contacts)
*/
router.get('/', (req,res) => {
    res.send('Get all contacts')
});
/* Signature for routes
@route POST api/contacts
@desc Add new contact
@access Private 
*/
router.post('/', (req,res) => {
    res.send('Add contact')
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
