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
                var submissions = {};
                console.log(Object.keys(this.players)[0] + ' is the first judge'); // Should be io.emit
                this.display = jsonHandler.createCurrentDisplay(newCard, firstJudge, submissions);
            },

            phase1: function (whiteCard) {
                this.display.submissions[whiteCard.cardID] = whiteCard;
                delete this.players[whiteCard.owner].data.hand[whiteCard.cardID]; // FIX

                if(Object.keys(this.display.submissions).length >= Object.keys(this.players).length - 1){
                    //this.phase2();
                }
            },

            phase2: function () {
                io.emit('display', this.display);
                io.emit('players', this.players);
            },

            phase3: function (whiteCard) {
                this.players[whiteCard.owner].score += 1;

                //io.emit('players', this.players);

                if(this.players[whiteCard.owner].score > 4){ // This variable dictates how long the games go oops.
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

                //io.emit('players', this.players);

                for(var i = 0; i < Object.keys(this.players).length; i++){
                    var curPlayerID = Object.keys(this.players)[i];
                    if(Object.keys(this.players[curPlayerID].data.hand.length < 7)){ // This variable dictates the hand size oops.
                        var newCard = jsonHandler.createWhiteCard(this.players[curPlayerID].data.playerId);
                        this.players[curPlayerID].data.hand[newCard.cardID] = newCard;
                    }
                }

                //this.phase2();
            },

            endGame: function (winnerID) {
                console.log(this.players[winnerID].name + ' won!')
                // Not sure what to do here yet.
            }

        };
    }
    return instance;
};
