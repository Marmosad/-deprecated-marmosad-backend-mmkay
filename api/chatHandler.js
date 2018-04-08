var io = require('../services/socketService.js')().io;
var board = require('../services/board.js')();
module.exports = {
    onMessage: function (data, socketId) {
        io.emit('message', {from: board.getPlayerName(socketId), msg: data});
    }
};