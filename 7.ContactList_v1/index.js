// <----[ 7.ContactList_v1 ]---->
const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // This is setup to look for views in the views folder
app.use(express.urlencoded());
var contactList = [
    {
        name: 'A',
        phone: '1',
    },
    {
        name: 'B',
        phone: '2',
    },
    {
        name: 'C',
        phone: '3',
    },
];

app.get('/', function (req, res) {
    return res.render('contact', {
        title: 'Contact_List',
        contact_list: contactList,
    });
});

app.get('/practice', function (req, res) {
    return res.render('practice', { title: 'Let us play with ejs' });
});

app.post('/create-contact', function (req, res) {
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone,
    // });

    contactList.push(req.body);

    return res.redirect('/');
    // we can use back for longer urls
    // return res.redirect('back');
});

app.listen(port, function (err) {
    if (err) {
        console.log('Error in  running the server', err);
    }
    console.log('server listening on port', port);
});
