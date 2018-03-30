var instance;
var board = require('../services/board.js')();

var userHandler = require('./userHandler.js')();
var chatHandler = require('./chatHandler.js');

module.exports = function () {
    var io = require('../services/socketService.js')().io;

    console.log('socketService Started');
    io.on('connection', function (socket) {
        var playerName = socket.handshake.query.name;
        userHandler.joined(playerName, socket, socket.id);

        socket.on('sendMsg', function (data) {
            console.log(data);
            chatHandler.onMessage(data.msg, data.from);
        });

        socket.on('disconnect', function (reason) {
            console.log(socket.id + ' ' + reason);
            userHandler.removeUser(socket.id);
        });

        socket.on('startGame', function(){
            board.startGame();
        });

        socket.on('submission', function (card) {
            var submission = Json.parse(card);
            board.phase1(submission);
        });

        socket.on('testAll', function (card) {
            board.startGame();
            board.phase1(card);
            board.phase3(card);
            console.log(board.players);
        });

    });
};

