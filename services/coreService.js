module.exports = function (http) {
    require('./socketService.js')(http);
    require('./board.js')();
    require('../api/socketHandler.js')();
    // require('../api/userHandler.js')();
};

