var express = require('express');
var router = express.Router();


router.get('/contacto', function(req, res) {
    res.render('contacto');
});

module.exports = router;
