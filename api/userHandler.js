var instance;
var board = require('../services/board.js')();

var jsonHandler = require('./jsonHandler.js');

module.exports = function () {
    if (!instance) {
        instance = {
            joined: function (playerName, socket, playerId) {
                console.log('Player with name: ' + playerName + ' and id: ' + playerId + ' joined');
                board.joinPlayer(jsonHandler.createPlayer(playerName, playerId, socket), playerId);// this only updates board
            },

            removeUser: function (playerId) {
                console.log('Player: '+ playerId + ' removed');
                board.removePlayer(playerId);
            }
        };
    }
    return instance;
};

