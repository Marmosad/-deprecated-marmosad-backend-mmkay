var instance;
var board = require('../services/board.js')();
module.exports = function () {
    if (!instance) {
        console.log('instance initiated');
        instance = {
            joined: function (player, playerId) {
                board.players[playerId] = player;
            },
            /*
                updateUsers: function (socket, io) {
                    //One player joins, sends a list of player ID's and playercount to each player.
                    for(var i = 0; i < players.length; i++){
                        io.emit('player', players[i].id);
                    }
                    io.emit('player', 'Total Players: ' + players.length);
                },
            */
            removeUser: function (user, socket, io) {
                sockets[user.id].disconnect();
                players.splice(players.indexOf(user));
                io.emit('player', user.id + " left the room");
            }
        };
    }
    return instance;
};

