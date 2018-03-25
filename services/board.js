var instance;
module.exports = function () {
    if (!instance) {
        instance = {
            players : {},
            sockets : {},
            instanceNumber: Math.random(),
            getPlayerName: function (socketId) {
                return this.players[socketId].data.playerName;
            }
        };
    }
    return instance;
};
