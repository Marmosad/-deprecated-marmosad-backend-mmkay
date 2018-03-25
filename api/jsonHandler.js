module.exports = {
    createBlackCard: function (user, io) {

    },

    createWhiteCard: function (user, io) {

    },
    createCurrentDisplay: function (user, io) {

    },
    createPlayer: function (playerName, playerId, socket) {
        return {
            data: {
                "playerName": playerName,
                "playerId": playerId,
                "hand": [
                    // TODO: 7x whiteCard.json, wait for db int
                ],
                "isJudge": false,
                "score": 0
            },
            socket: socket
        }
    }
};

// Each function takes the parameters required to create the respective objects and return the objects created.