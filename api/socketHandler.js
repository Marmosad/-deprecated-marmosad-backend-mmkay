//var instance;
var board = require('../services/board.js')();

var userHandler = require('./userHandler.js')();
var chatHandler = require('./chatHandler.js');

module.exports = function () {
    var io = require('../services/socketService.js')().io;

    console.log('socketService Started');
    io.on('connection', function (socket) {
        userHandler.joined(socket.handshake.query.name, socket, socket.id);//this is called to first create, then add player to board.
        io.emit('updateDisplay', board.getDisplay());
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
            console.log('startGame Socket event');
            board.startGame();
        });

        socket.on('submission', function (card) {
            console.log(card + "submitted");
            console.log(board.submission(card));
        });

        socket.on('judgment', function (card) {
            board.judgement(card); // TODO why does this count as a submission
        });

        socket.on('testAll', function (card) {
            board.startGame();
            board.submission(card);
            //board.phase3(card);
            console.log(board.display);
        });

        socket.on('reset', function () {
            console.log('this happened');
            io.emit('boardReset', null);
            io.emit('message', {from: '', msg: ''});
            var players = Object.keys(board.players);
            for (var i in players) {
                board.removePlayer(players[i]);
            }
            board.reset();
        })
    });
};