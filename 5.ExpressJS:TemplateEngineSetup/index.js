// <----[ 5.ExpressJS:Template Engine Setup]---->
const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(port, function (err) {
    if (err) {
        console.log('Error in  running the server', err);
    }
    console.log('server listening on port', port);
});
