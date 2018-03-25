var instance;
var board = require('../services/board.js')();
var jsonHandler = require('./jsonHandler.js');
module.exports = function () {
    if (!instance) {
        instance = {
            joined: function (playerName, socket, playerId) {
                console.log('Player with name: ' + playerName + ' and id: ' + playerId + ' joined');
                board.players[playerId] = jsonHandler.createPlayer(playerName, playerId, socket);
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
            removeUser: function (playerId) {
                console.log('Player: '+ playerId + ' removed');
                board.removePlayer(playerId);
            }
        };
    }
    return instance;
};

