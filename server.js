const express = require('express'); //our entry point to backend
const connectDB = require('./config/db')


// Connect Database
connectDB();

 const app = express() // our variable app object 

//  our route
app.get('/', (req, res) => res.json({msg: 'Welcome to the ContactKeeper API...'})); // this will display text in postman if connection is made. (testing purposes)



// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));





 const PORT = process.env.PORT || 5000; // this will post to our local host.  use postman to check if connection is made.

 app.listen(PORT, () => console.log(`Server started on port ${PORT}`) ); //listens for the port ( looks for enviorment veriable called port )
