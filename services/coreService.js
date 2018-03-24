module.exports = function (http) {
    var io = require('./socketService.js')(http);
    console.log(io.getNum());
    io.incrementNum();
    console.log(io.getNum());

    var board = require('./board.js')();
    console.log(board.instanceNumber);
    var boardTwo = require('./board.js')();
    console.log(boardTwo.instanceNumber);
    var socketHandler = require('../api/socket.js')();
    // require('../api/userHandler.js')();
};