var express = require('express');
var url = require('url');
var app = express();

app.use('/', express.static('./'));
app.use('/src', express.static('./src'));
app.use('/app', express.static('./app'));
app.use('/app/json/', express.static('./app/json'));

app.listen(80);