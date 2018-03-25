var instance;
module.exports = function () {
    if (!instance) {
        instance = {
            players : {},
            instanceNumber: Math.random(),
            getPlayerName: function (socketId) {
                return this.players[socketId].data.playerName;
            },
            removePlayer: function (playerId) {
                this.players[playerId].socket.disconnect(true);
                delete this.players[playerId].socket;
                delete this.players[playerId].data;
                delete this.players[playerId];
                console.log(Object.keys(this.players).length + ' is left in the game');
            }
        };
    }
    return instance;
};
