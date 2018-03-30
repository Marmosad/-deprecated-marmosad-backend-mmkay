module.exports = function (http) {
    require('./socketService.js')(http);
    var board = require('./board.js')();
    board.constructor();
    require('../api/socketHandler.js')();
    // require('../api/userHandler.js')();
};