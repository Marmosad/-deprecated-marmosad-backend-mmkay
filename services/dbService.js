module.exports = function () {
    var instance;
    if(!instance){
        instance = {
            start: function () {
                var mysql = require('mysql');
                var connection = mysql.createConnection({
                    host: 'localhost',
                    port: '443',
                    database: 'cah'
                });

                connection.connect(function (err) {
                    if (err) {
                        console.error('error connecting: ' + err.stack);
                        return;
                    }
                    console.log('connected as id ' + connection.threadId);
                });
            },
            getWhiteCards: function () { // gets rando white card, or many cards

            },
            getBlackCard: function () { //gets rand black card

            }
        };
    }
    return instance;
};


