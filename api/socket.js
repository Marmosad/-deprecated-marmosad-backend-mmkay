var UserHandler = require('./userHandler.js');
var GameHandler = require('./gameHandler.js');
var eh;


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

        UserHandler.joined(currentUser, socket, io);
        io.emit('gameStatus', currentUser.name + ' joined the game');
        UserHandler.newUser(socket, io);
        console.log('sup ' + currentUser.name);

        socket.on('startGame', function () {
            socket.emit('gameStatus', 'Starting Game');
            GameHandler.startGame();
        });

        socket.on('sendMsg', function (data) {
            if(!data.toward instanceof Array || !data.msg){
                socket.emit('msgResult', {'success':false, 'error':'form incorrect'});
                console.log(currentUser.name + ' sent unsuccessfully due to incorrect form.');
                console.log(data.toward);
                return;
            }
            for(var i = data.toward.length-1; i >= 0; i--){
                var socketID = UserHandler.getSocketID(data.toward[i]);
                if(socketID){
                    socket.broadcast.to(socketID).emit('receiveMsg', {"msg":data.msg?data.msg:"", "from":currentUser.name});
                    socket.emit('msgResult', {'success':true, 'msg':data.msg, 'to':data.toward[i]});
                    console.log(currentUser.name + ' sent ' + data.msg + ' to ' + data.toward[i] + ' successfully.');
                }
                else{
                    socket.emit('msgResult', {'success':false, 'error':data.toward[i] + ' doesn\'t exit', 'msg':data.msg, 'to':data.toward[i]});
                    console.log(currentUser.name + ' failed to send ' + data.msg + ' to ' + data.name);
                }
            }
        });

        UserHandler.joined(currentUser, socket, io);
    });
};

