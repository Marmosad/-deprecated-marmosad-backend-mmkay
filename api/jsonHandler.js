
module.exports = {
    createBlackCard: function () {
        return {
            "cardID": 111, // This should be a query
            "body": "This is the contents of the card", // This should also be a query
        }
    },
    createWhiteCard: function (playerID) {
        return {
            "cardID": 222, // This should be a query
            "body": "This is the contents of the card", // This should also be a query
            "owner": playerID // This is a player.json id
        }
    },
    createCurrentDisplay: function (blackCard, judge, submissions) {
        return {
            "blackCard": blackCard, //This should be a black card object
            "submissions": submissions,
            "currentJudge": judge // The player ID of the person who is the judge
        }
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