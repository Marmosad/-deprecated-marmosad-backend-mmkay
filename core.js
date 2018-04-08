module.exports = function(http){
    var coreService = require('./services/coreService')(http); // this is to manage instances.
};