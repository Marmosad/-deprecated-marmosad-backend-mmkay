var instance;
module.exports = function () {
    if (!instance) {
        console.log('instance initiated');
        instance = {
            players : {},
            sockets : {},
            instanceNumber: Math.random()
        };
    }
    return instance;
};
