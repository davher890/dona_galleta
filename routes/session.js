var express = require('express');
var router = express.Router();


router.post('/session', function(req, res) {

    var cartItem = req.body;

    console.log(cartItem);

    res.status(200).json({});
});


router.get('/session', function(req, res) {

    res.status(200).json({});
});

module.exports = router;
