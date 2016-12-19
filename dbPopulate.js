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

var keys = Object.keys(dbJson);
for (var i = 0; i < keys.length; i++) {

    var key = keys[i];
    var json = dbJson[key];
    firebase.database().ref(key).set(json);
}
