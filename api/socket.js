var userHandler = require('./userHandler.js')();
// var GameHandler = require('./gameHandler.js');
var chatHandler = require('./chatHandler.js');
var board = require('../services/board.js')();

module.exports = function () {
    var io = require('../services/socketService.js')().io;
    console.log(require('../services/socketService.js')().getNum());

    console.log('socketService Started');
    io.on('connection', function (socket) {
        var playerName = socket.handshake.query.name;
        userHandler.joined({
            playerName: playerName,
            socket: socket
        }, socket.id);

        socket.on('sendMsg', function (data) {
            console.log(data);
            chatHandler.onMessage(data.msg, data.from);
        });
        /*
        socket.on('startGame', function () {

            socket.emit('gameStatus', 'Starting Game');
            GameHandler.startGame();
        });

        socket.on('submitCard', function (whiteCard) {
            console.log(currentUser.id + ': ' + whiteCard);
            GameHandler.startGame();
            var currentUser = {
                id: socket.id,
                name: name
            };
            socket.emit('gameStatus', currentUser.name + ' submitted their entry');
        });
        */
    });
};

