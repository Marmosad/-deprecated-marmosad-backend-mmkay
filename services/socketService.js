var instance;
module.exports = function (http) {
    if (!instance) {
        console.log('instance initiated');
        instance = {
            io: require('socket.io')(http),
            num: 100,
            incrementNum: function () {
                this.num = this.num + 100;
            },
            getNum: function () {
                return this.num;
            }
        };
    }
    return instance;
};
