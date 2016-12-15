var firebase = require('firebase');
var dbJson = require("./firebaseDB.json");

var config = {
    apiKey: "AIzaSyBlH-zTU4Veg34fEpJwKhZgfNK17zAjiys",
    authDomain: "missgalleta-a947e.firebaseapp.com",
    databaseURL: "https://missgalleta-a947e.firebaseio.com",
    storageBucket: "missgalleta-a947e.appspot.com",
    messagingSenderId: "707339080953"
};

firebase.initializeApp(config);

var hombreJson = dbJson.hombre;
for (var i = 0; i < hombreJson.length; i++) {
    firebase.database().ref('hombre/'+i).set(hombreJson[i]);
}

var mujerJson = dbJson.mujer;
for (var i = 0; i < hombreJson.length; i++) {
    firebase.database().ref('mujer/'+i).set(mujerJson[i]);
}
