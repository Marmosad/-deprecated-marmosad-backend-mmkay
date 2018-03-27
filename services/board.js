var instance;

var jsonHandler = require('../api/jsonHandler.js');
var io = require('../services/socketService.js')().io;

module.exports = function () {
    if (!instance) {
        instance = {
            players : {},
            display : {},

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
                var newCard = jsonHandler.createBlackCard();
                var firstJudge = Object.keys(this.players)[0];
                var submissions = [];
                console.log(Object.keys(this.players)[0] + ' is the first judge');
                this.display = jsonHandler.createCurrentDisplay(newCard, firstJudge, submissions);
                return this.display;
            },

            phase1: function (whiteCard) {
                //submission = whiteCard.parse;
                this.display.submissions.push(whiteCard);
                delete this.players[whiteCard.owner].hand[whiteCard.cardID];

                if(display.submissions.length >= Object.keys(this.players).length - 1){
                    this.phase2();
                }
            },

            phase2: function () {
                io.emit('display', this.display);
                io.emit('players', this.players);
            },

            phase3: function (whiteCard) {
                this.players[whiteCard.owner].score += 1;

                if(this.players[whiteCard.owner].score > 4){
                    this.endGame(whiteCard.owner);
                } else {
                    this.phase4();
                }
            },

            phase4: function () {
                var newCard = jsonHandler.createBlackCard();
                var newJudgeID = Object.keys(this.players)[Math.floor(Math.random()*Object.keys(this.players).length)];
                this.display.blackCard = newCard;
                this.display.currentJudge = newJudgeID;
                this.display.submissions = [];

                for(var i = 0; i < Object.keys(this.players).length; i++){
                    var curPlayerID = Object.keys(this.players)[i];
                    if(this.players[curPlayerID].hand.length < 7){
                        this.players[curPlayerID].hand.push(jsonHandler.createWhiteCard(curPlayerID));
                    }
                }

                this.phase2();
            },

            endGame: function (winner) {
                console.log(this.players[winner].name + ' won!')
                // Not sure what to do here yet.
            }

        };
    }
    return instance;
};
