// <----[ 4.My First Express App Render HTML Using Express]---->
const express = require('express');
const port = 8000;
const app = express();

app.get('/', function (req, res) {
    res.send('<h1>Welcome</h1>');
});

app.listen(port, function (err) {
    if (err) {
        console.log('Error in  running the server', err);
    }
    console.log('server listening on port', port);
});
