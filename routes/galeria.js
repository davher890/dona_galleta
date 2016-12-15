var express = require('express');
var router = express.Router();
var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyBlH-zTU4Veg34fEpJwKhZgfNK17zAjiys",
    authDomain: "missgalleta-a947e.firebaseapp.com",
    databaseURL: "https://missgalleta-a947e.firebaseio.com",
    storageBucket: "missgalleta-a947e.appspot.com",
    messagingSenderId: "707339080953"
};

firebase.initializeApp(config);

router.get('/galeria', function (req, res) {

    var param = req.query.tipo;

    // Get hombre data from firebase and show the data
    // var jsonData = getDataFromFirebase():
    console.log(param);
    var galeria = firebase.database().ref('hombre/');
    galeria.on('value', function (data) {
        res.render('gallery', {
            data: data.val()
        });
    });
});

module.exports = router;
