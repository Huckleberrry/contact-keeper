const express = require('express');
const router = express.Router();

/* Signature for routes
@route POST api/users
@desc Registera user
@access Public 
*/

router.post('/', (req,res) => {
    res.send('Register a user')
});  // "/" points to API/USERS



module.exports = router;  //  "/" points to API/USERS
