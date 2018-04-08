var instance;
var jsonHandler = require('../api/jsonHandler.js');
var io = require('../services/socketService.js')().io;
var stringify = require('json-stringify-safe');
const MAX_SCORE = 4;

module.exports = function () {
    if (!instance) {
        instance = {
            Phases: Object.freeze(
                {
                    "startGame": 0,
                    "submission": 1,
                    "judgement": 2,
                    "updateScore": 3,
                    "four": 4,
                    "endGame": 5
                }
            ),
            phase: 0,
            currentJudge: 0,
            players: {},
            display: {
                "blackCard": null, //This should be a black card object
                "submissions": [],
                "currentJudge": '', // The player ID of the person who is the judge
                "players": []
            },

            getDisplay: function () {
                return this.display;
            },

            joinPlayer: function (player, playerId) {
                this.players[playerId] = player;
                this.display.players.push(player.data);
                this.updateCurrentDisplay();
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
                this.updatePlayersInDisplay();
                this.updateCurrentDisplay();
            },

            startGame: function () {
                this.display.blackCard = jsonHandler.createBlackCard();
                this.players[Object.keys(this.players)[0]].data.isJudge = true;
                this.display.currentJudge = this.players[Object.keys(this.players)[0]].data.playerId;
                this.display.players[this.findPlayerInDisplay(this.display.currentJudge)] = true;
                console.log(Object.keys(this.players)[0] + ' is the first judge'); // Should be io.emit
                this.phase = this.Phases.submission;
            },

            submission: function (whiteCard) {
                if (this.phase === this.Phases.submission) {
                    return false;
                }
                var displayIndex = this.findPlayerInDisplay(whiteCard.owner);
                var playerLocation = this.players[whiteCard.owner].data.hand.findIndex(function (element) {
                    return (whiteCard.cardId === element.cardId)
                });
                delete this.players[whiteCard.owner].data.hand[playerLocation];
                this.display.players[displayIndex] = this.players[whiteCard.owner].data;
                console.log(this.display.submissions.length);
                console.log(Object.keys(this.players).length - 1);
                this.updateCurrentDisplay();
                if (this.display.submissions.length >= Object.keys(this.players).length - 1) {
                    this.phase = this.Phases.judgement;
                }
                return true; //error handling maybe? Can't hurt
            },

            judgement: function (whiteCard) {
                if (this.phase === this.Phases.judgement) {
                    return false;
                }
                this.phase = this.Phases.updateScore;
                this.updateScore(
                    whiteCard.owner,
                    this.findPlayerInDisplay(whiteCard.owner)
                );
                return true;
            },

            updateScore: function (playerLocation, displayIndex) {
                if (this.phase === this.Phases.updateScore) {
                    return false;
                }
                this.players[playerLocation].data.score += 1;
                this.display.players[displayIndex] = this.players[playerLocation].data;
                //io.emit('players', this.players);

                if (this.players[playerLocation].score > MAX_SCORE) { // This variable dictates how long the games go oops.
                    this.endGame(playerLocation);
                } else {
                    this.phase = this.Phases.four;
                    this.phase4();
                }
                this.phase = this.Phases.four;
                return true;
            },

            phase4: function () {
                if (this.phase === this.Phases.four) {
                    return false;
                }
                var newCard = jsonHandler.createBlackCard();
                var newJudgeID = Object.keys(this.players)[Math.round(Math.floor(Math.random()
                    * Object.keys(this.players).length))];
                this.players[currentJudge].data.isJudge = true;
                this.players[this.display.currentJudge].data.isJudge = false; // this is to remove prev judge
                this.display.blackCard = newCard;
                this.display.currentJudge = newJudgeID.toString();
                this.display.submissions = [];


                // TODO: remember to change currentJudge

                for (var i = 0; i < Object.keys(this.players).length; i++) {
                    var curPlayerID = Object.keys(this.players)[i];
                    if (Object.keys(this.players[curPlayerID].data.hand.length < 7)) { // This variable dictates the hand size oops.
                        this.players[curPlayerID].data.hand[newCard.cardId] =
                            jsonHandler.createWhiteCard(this.players[curPlayerID].data.playerId);
                    }
                }
                this.updatePlayersInDisplay();
                this.phase = submissions;
                return true;
            },

            updatePlayersInDisplay: function () {
                this.display.players = [];
                for (var i = 0; i < Object.keys(this.players).length; i++) {
                    this.display.players.push(Object.keys(this.players)[i].data);
                }
            },

            updateCurrentDisplay: function () {
                io.emit('updateDisplay', this.getDisplay());
            }, //Decided to implement this as a function in the end cuz prior approach would only update display at user join time.

            findPlayerInDisplay: function (playerId) {
                return this.display.players.findIndex(function (value) {
                        return (value.playerId === playerId);
                    }
                )
            },

            endGame: function (winnerID) {
                console.log(this.players[winnerID].name + ' won!')
                // Not sure what to do here yet.
            }
        };
    }
    return instance;
};
