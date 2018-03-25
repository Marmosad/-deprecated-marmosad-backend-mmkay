var instance;
module.exports = function (http) {
    if (!instance) {
        instance = {
            io: require('socket.io')(http)
        };
    }
    return instance;
};
