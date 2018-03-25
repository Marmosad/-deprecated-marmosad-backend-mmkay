var instance;
module.exports = function () {
    if (!instance) {
        instance = {
            players : {},
            sockets : {},
            instanceNumber: Math.random()
        };
    }
    return instance;
};
