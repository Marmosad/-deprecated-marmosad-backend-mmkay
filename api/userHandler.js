var users = [];
var sockets = {};

module.exports = {

    joined: function (user, socket, io) {
        users.push(user);
        sockets[user.id] = socket;
        io.emit('userJoin', {nick: user.nick});
    },

    getSocketID: function (name) {
        try {
            return users.reverse().filter(function (users) {
                return users.name === name;
            })[0].id;
        } catch(error ){
            if(error instanceof TypeError) {
                return false;
            }
            else{
                console.log(error);
                return false;
            }
        }
    }
};