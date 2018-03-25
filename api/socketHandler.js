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
            var firstRound = board.startGame();
            console.log(firstRound);
            io.emit('startGame', firstRound);
        });
        socket.on('submission', function (card) {
            console.log(card);
            board.phase1(card);
        });
        socket.on('winner', function (card) {
            console.log(card);
            board.phase3(card);
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

