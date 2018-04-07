module.exports = {
    createBlackCard: function () {
        return {
            "cardId": 111, // This should be a query
            "body": "This is the contents of the card" // This should also be a query
        }
    },
    createWhiteCard: function (playerId) {
        return {
            "cardId": 222, // This should be a query
            "body": "This is the contents of the card", // This should also be a query
            "owner": playerId // This is a player.json id
        }
    },

    initializeCurrentDisplay: function () {
        return {
            "blackCard": null, //This should be a black card object
            "submissions": [],
            "currentJudge": null, // The player ID of the person who is the judge
            "players": []
        }
    },

    createPlayer: function (playerName, playerId, socket) { //this only creates a player
        var hand = [];
        for(var i = 0;  i < 7; i++){ // TODO: 7x whiteCard.json, wait for db int
            var newCard = this.createWhiteCard(playerId);
            hand.push(newCard);
        }

        return {
            data: {
                "playerName": playerName,
                "playerId": playerId,
                "hand": hand,
                "isJudge": false, // Do we still need this field? I think the currentJudge in display is good enough?
                "score": 0
            },
            socket: socket
        }
    }
};