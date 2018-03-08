const express = require('express');
const api = express();

api.get('/testing/:id', function (req, res) {
    res.setHeader('marmosad', 'testing endpoint');
    res.send(JSON.stringify({id_entered: req.params.id }, null, 0));
});


module.exports = api;