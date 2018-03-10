var UserHandler = require('./userHandler.js');


module.exports = function (io) {
    console.log('sup');
    io.sockets.on('connection', function (socket) {

        socket.emit('hello!');
        console.log('sup');
        var name = socket.handshake.query.name;
        var currentUser = {
                id: socket.id,
                name: name
            };

        socket.on('ding', function () {
            socket.emit('dong', currentUser.id + ' ' + currentUser.name);
        });

        UserHandler.joined(currentUser, socket, io);
    });
};

