import * as firebase from "firebase";
//var firebase = require("firebase");

const config = {
    databaseURL: "https://testapp-22b3d.firebaseio.com/",
    projectId: "testapp-22b3d",

};

// var firebase = require("firebase");
// var config = {
//     databaseURL: "https://testapp-22b3d.firebaseio.com/",
//     projectId: "testapp-22b3d",

firebase.initializeApp(config);

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
