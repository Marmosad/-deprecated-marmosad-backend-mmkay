//var instance;
var board = require('../services/board.js')();

var userHandler = require('./userHandler.js')();
var chatHandler = require('./chatHandler.js');

module.exports = function () {
    var io = require('../services/socketService.js')().io;

    console.log('socketService Started');
    io.on('connection', function (socket) {
        userHandler.joined(socket.handshake.query.name, socket, socket.id);//this is called to first create, then add player to board.

        socket.on('sendMsg', function (data) {
            console.log(data);
            chatHandler.onMessage(data.msg, data.from);
        });

        socket.on('printDisplay', function (data) {
            console.log(board.display);
        });

        socket.on('disconnect', function (reason) {
            console.log(socket.id + ' ' + reason);
            userHandler.removeUser(socket.id);
        });

        socket.on('startGame', function () {
            board.startGame();
        });

        socket.on('submission', function (card) {
            var submission = Json.parse(card);
            board.submission(submission);
        });

        socket.on('testAll', function (card) {
            board.startGame();
            board.submission(card);
            //board.phase3(card);
            console.log(board.display);
        });

    });
};