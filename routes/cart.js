var express = require('express');
var router = express.Router();


router.get('/cart', function(req, res) {


    // var user = req.session.user;
    res.render('cart', {
        cart: [{
            nombre: 'Vestido azul',
            precio: 34
        }, {
            nombre: 'Traje verde',
            precio: 25
        }, {
            nombre: 'Culotte',
            precio: 76
        }]
    });
});

module.exports = router;
