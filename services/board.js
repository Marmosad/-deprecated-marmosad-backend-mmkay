var instance;

var jsonHandler = require('../api/jsonHandler.js');
var io = require('../services/socketService.js')().io;
var stringify = require('json-stringify-safe');

module.exports = function () {
    if (!instance) {
        instance = {

            players: {},
            display: {
                "blackCard": null, //This should be a black card object
                "submissions": [],
                "currentJudge": null, // The player ID of the person who is the judge
                "players": []
            },

            joinPlayer: function (player, playerId) {
                this.players[playerId] = player;
                this.display.players.push(player.data);
            },

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
            },

            startGame: function () {
                this.display.blackCard = jsonHandler.createBlackCard();
                this.currentJudge = Object.keys(this.players)[0];
                console.log(Object.keys(this.players)[0] + ' is the first judge'); // Should be io.emit
            },

            phase1: function (whiteCard) {
                var playerIndex = this.display.players.findIndex(function (value) {
                    return(value.playerId === whiteCard.owner);
                });
                var location = this.players[whiteCard.owner].data.hand.findIndex(function (element) {
                    return (whiteCard.cardId === element.cardId)
                });
                delete this.players[whiteCard.owner].data.hand[location];
                this.display.players[playerIndex] = this.players[whiteCard.owner].data;
                console.log(this.display.submissions.length);
                console.log(Object.keys(this.players).length - 1);
                if (this.display.submissions.length >= Object.keys(this.players).length - 1) {
                    this.phase2();
                    //console.log(this.display.players);
                }
            },

            phase2: function () {
                //this.updateCurrentDisplayPlayers();
                io.emit('display', stringify(this.display, null, 0));
            },

            phase3: function (whiteCard) {
                this.players[whiteCard.owner].data.score += 1;

                //io.emit('players', this.players);

                if (this.players[whiteCard.owner].score > 4) { // This variable dictates how long the games go oops.
                    this.endGame(whiteCard.owner);
                } else {
                    this.phase4();
                }
            },

            phase4: function () {
                var newCard = jsonHandler.createBlackCard();
                var newJudgeID = Object.keys(this.players)[Math.floor(Math.random() * Object.keys(this.players).length)];
                this.display.blackCard = newCard;
                this.display.currentJudge = newJudgeID;
                this.display.submissions = [];

                //io.emit('players', this.players);

                for (var i = 0; i < Object.keys(this.players).length; i++) {
                    var curPlayerID = Object.keys(this.players)[i];
                    if (Object.keys(this.players[curPlayerID].data.hand.length < 7)) { // This variable dictates the hand size oops.
                        var newCard = jsonHandler.createWhiteCard(this.players[curPlayerID].data.playerId);
                        this.players[curPlayerID].data.hand[newCard.cardId] = newCard;
                    }
                }
                this.phase2();
            },

            updateCurrentDisplayPlayers: function () {
                this.display.players = [];
                for (var i = 0; i < Object.keys(this.players).length; i++) {
                    var curPlayerID = Object.keys(this.players)[i];
                    this.display.players.push(this.players[curPlayerID].data);
                }
            }, //Decided to implement this as a function in the end cuz prior approach would only update display at user join time.

            endGame: function (winnerID) {
                console.log(this.players[winnerID].name + ' won!')
                // Not sure what to do here yet.
            }

        };
    }
    return instance;
};
