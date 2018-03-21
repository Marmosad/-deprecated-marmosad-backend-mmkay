var players = [];
var sockets = {};

module.exports = {

    joined: function (user, socket, io) {
        players.push(user);
        sockets[user.id] = socket;
        io.emit('userJoin', {nick: user.nick});
    },

    newUser: function (socket, io) {
    	//One player joins, sends a list of player ID's and playercount to each player.
    	for(var i = 0; i < players.length; i++){
    		io.emit('player', players[i].id);
    	}
    	io.emit('player', 'Total Players: ' + players.length);
    },

    removeUser: function (user, socket, io) {
    	sockets[user.id].disconnect('User Left');
    	var index = players.indexOf(user);
    	players.splice(index);
    	io.emit('player', user.id + " left the room");
    }
};