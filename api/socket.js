var UserHandler = require('./userHandler.js');

module.exports = function (io) {
    console.log('Socket start');
    io.sockets.on('connection', function (socket) {
        socket.emit('welcome');

        var name = socket.handshake.query.name;
        var currentUser = {
            id: socket.id,
            name: name
        };
        console.log('Socket ' + currentUser.id + ' opened with name ' + currentUser.name + '.');
        socket.broadcast.emit('userJoin', currentUser.id + ' ' + currentUser.name);

        socket.on('ding', function () {
            socket.emit('dong', currentUser.id + ' ' + currentUser.name);
        });

        socket.on('@', function (data) {
            var socketID = UserHandler.getSocketID(data.name);
            if(socketID){
                socket.broadcast.to(socketID).emit('receivedMessage', {"msg":data.msg?data.msg:"", "from":currentUser.name});
                socket.emit('msgSuccessful');
                console.log(currentUser.name + ' sent ' + data.msg + ' to ' + data.name + ' successfully.');
            }
            else{
                socket.emit('msgUnsuccessful');
                console.log(currentUser.name + ' failed to send ' + data.msg + ' to ' + data.name);
            }
        });

        socket.on('publicMessage', function (data) {
            socket.broadcast.emit('receivedMessage', {"msg":data.msg?data.msg:"", "from":currentUser.name});
            console.log(currentUser.name + ' sent ' + data.msg + ' publicly.');
        });


        UserHandler.joined(currentUser, socket, io);
    });
};

