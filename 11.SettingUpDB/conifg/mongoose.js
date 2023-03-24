// We require mongoose
const mongoose = require('mongoose');

// Connected to the database
mongoose.connect('mongodb://localhost/contacts_list_db');

// When conncted this function "connection" give us access to the database
const db = mongoose.connection;

// log if error occurs
db.on('error', console.error.bind(console, 'error connecting to database'));

// this connection (line 8) is open for me to interact with the database then call the callback function
db.once('open', function () {
    console.log('Successfully connected to database');
});
