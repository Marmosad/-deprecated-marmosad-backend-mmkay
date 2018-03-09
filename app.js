var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
require('./api/socket.js')(io);


const path = require('path');
const api = require('./api/api.js');
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

http.listen(8080, function () {
    console.log('listening on *: 8080');
});


