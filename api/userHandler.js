var users = [];
var sockets = {};

module.exports = {

    joined: function (user, socket, io) {
        users.push(user);
        sockets[user.id] = socket;
        io.emit('userJoin', {nick: user.nick});
    }
};