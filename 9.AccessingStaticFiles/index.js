// <----[ 9.AccessingStaticFiles ]---->
const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // This is setup to look for views in the views folder
app.use(express.urlencoded());
app.use(express.static('assets'));

// middleware1
// app.use(function (req, res, next) {
//     req.myName = 'middleware1';
//     console.log('middleware 1 called');
//     next();
// });

// middleware2
// app.use(function (req, res, next) {
//     console.log('Called in middleware2 req.myName = ' + req.myName);
//     console.log('middleware 2 called');

//     next();
// });

var contactList = [
    {
        name: 'Name Example',
        phone: 'Phone Example',
    },
];

app.get('/', function (req, res) {
    console.log('Called in get Route Controller req.myName = ' + req.myName);

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
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone,
    // });
    console.log('called from Post route controller "/create-contact" ');

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
