// <----[ 9.AccessingStaticFiles ]---->
const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

/*
The line "const db = require('./config/mongoose')" is typically used in Node.js applications to establish a connection to a MongoDB database using the Mongoose library.

Here's what this line does:

"const" is a keyword in JavaScript that declares a variable with a constant value. In this case, the variable is named "db".
"require" is a function in Node.js that is used to load modules. In this case, we are loading the Mongoose module.
"./config/mongoose" is the path to the Mongoose configuration file. This file contains information about the database connection, such as the URL of the MongoDB server and any authentication credentials required.
Overall, this line of code initializes the "db" variable with an object that represents the connection to the MongoDB database. This object can be used to interact with the database using the methods provided by the Mongoose library.
*/

const db = require('./conifg/mongoose');

const Contact = require('./models/contact');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // This is setup to look for views in the views folder

// urlencoded() reads only the form data that is submitted and not the params so we wrote to get params or query over params using functions written in line 81
app.use(express.urlencoded());

app.use(express.static('assets'));

var contactList = [
    {
        name: 'Abc',
        phone: '123',
    },
    {
        name: 'Def',
        phone: '456',
    },
    {
        name: 'Ghi',
        phone: '789',
    },
    {
        name: 'Jkl',
        phone: '101112',
    },
    {
        name: 'Mno',
        phone: '131415',
    },
];

app.get('/', function (req, res) {
    console.log('called from get route controller "/" ');

    return res.render('contact', {
        title: 'Contact_List',
        contact_list: contactList,
    });
});

app.get('/practice', function (req, res) {
    console.log('called from get route controller "/practice" ');
    return res.render('practice', { title: 'Let us play with ejs' });
});

app.post('/create-contact', function (req, res) {
    console.log('called from Post route controller "/create-contact" ');

    contactList.push(req.body);

    return res.redirect('/');
    // we can use back for longer urls
    // return res.redirect('back');
});

// <-- { For DELETING a CONTACT } -->
app.get('/delete-contact/', function (req, res) {
    // <-- { Get the query from the url } -->
    console.log(req.query.phone);
    console.log(req.query.name);

    let phone = req.query.phone;

    let contactIndex = contactList.findIndex(
        (contact) => contact.phone == phone
    );

    if (contactIndex != -1) {
        contactList.splice(contactIndex, 1);
    }
    return res.redirect('back');
});

app.listen(port, function (err) {
    if (err) {
        console.log('Error in  running the server', err);
    }
    console.log('server listening on port', port);
});
