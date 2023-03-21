// <----[ 9.AccessingStaticFiles ]---->
const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

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
