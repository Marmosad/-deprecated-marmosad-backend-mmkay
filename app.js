var express = require('express');
var app = express();
var http = require('http').Server(app);
//var mysql = require('mysql');
require('./services/coreService.js')(http);

const path = require('path');
const api = require('./api/api.js');
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('/', function (req, res) {
    console.log('serving files');
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

http.listen(8080, function () {
    console.log('listening on *: 8080');
});

/*
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : '8080',
    database : 'CAH'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
*/


