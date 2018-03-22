var players = [];
var sockets = {};

module.exports = {

    joined: function (user, io) {
        var newPlayer = "Some method to create a player object with user = user.name, socket = user.id @wenyu help";

        players.push(newPlayer);

        sockets[user.id] = user.id; //Do I need this @wenyu
        
        //io.emit('userJoin', {nick: user.nick});
    },

    newUser: function (socket, io) {
    	//One player joins, sends a list of player ID's and playercount to each player.
    	for(var i = 0; i < players.length; i++){
    		io.emit('player', players[i].id);
    	}
    	io.emit('player', 'Total Players: ' + players.length);
    },

    removeUser: function (user, socket, io) {
    	sockets[user.id].disconnect();
    	players.splice(players.indexOf(user));
    	io.emit('player', user.id + " left the room");
    }
};