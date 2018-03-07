var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    app.use(express.static(path.join(__dirname + 'dist/index.html')));
});

module.exports = router;
