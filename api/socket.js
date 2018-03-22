var UserHandler = require('./userHandler.js');
var GameHandler = require('./gameHandler.js');
var eh;


module.exports = function (io) {

    console.log('Hello There');

    io.sockets.on('connection', function (socket) {
        socket.emit('welcome');

        var name = socket.handshake.query.name;
        var currentUser = {
            id: socket.id,
            name: name
        };
        console.log('Socket ' + currentUser.id + ' opened with name ' + currentUser.name + '.');
        socket.broadcast.emit('userJoin', currentUser.id + ' ' + currentUser.name);

        UserHandler.joined(currentUser, io);

        io.emit('gameStatus', currentUser.name + ' joined the game');

        UserHandler.newUser(socket, io);

        console.log('sup ' + currentUser.name);

        socket.on('startGame', function () {
            socket.emit('gameStatus', 'Starting Game');
            GameHandler.startGame();
        });

        socket.on('submitCard', function (whiteCard){
            console.log(currentUser.id + ': ' + whiteCard);
            GameHandler.startGame();var currentUser = {
                id: socket.id,
                name: name
            };
            socket.emit('gameStatus', currentUser.name + ' submitted their entry');
        });

        UserHandler.joined(currentUser, socket, io);
    });
};

