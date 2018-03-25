module.exports = function (http) {
    require('./socketService.js')(http);
    require('./board.js')();
    require('../api/socket.js')();
    // require('../api/userHandler.js')();
};