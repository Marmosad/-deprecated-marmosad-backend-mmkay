var express = require("express");
var app = express();
var http = require('http').Server(app);
const path = require('path');
var socketIO = require('socket.io')(http);
const api = require('./api/api.js');
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

socketIO.on('connection', function (req, res) {
    console.log('connection established');
});

http.listen(3000, function () {
    console.log('listening on *: 3000');
});


