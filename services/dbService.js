var instance;
module.exports = function () {
    if(!instance){
        instance = {
            connection: null,
            start: function () {
                var mysql = require('mysql');
                connection = mysql.createConnection({
                    host: 'localhost',
                    user : 'root',
                    port: 3306,
                    database: 'cards'
                });

                connection.connect(function (err) {
                    if (err) {
                        console.error('error connecting: ' + err.stack);
                        return;
                    }
                    console.log('connected as id ' + connection.threadId);
                });
            },
            getWhiteCard: function (id, callback) {
                connection.query('SELECT * FROM white_card', function(err, results, fields){
                    if(err) throw err;

                    callback(results[0]);
                });
            },
            getBlackCard: function (id, callback) { //gets rand black card
                connection.query('SELECT * FROM black_card', function(err, results, fields){
                    if(err) throw err;

                    callback(results[0]);
                });
            }
        };
    }
    return instance;
};


