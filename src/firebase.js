const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyAxMNWlYDycOWpAbp7zpVzi1OeKI-YfwMU",
    authDomain: "facebook-react.firebaseapp.com",
    databaseURL: "https://facebook-react.firebaseio.com",
    projectId: "facebook-react",
    storageBucket: "facebook-react.appspot.com",
    messagingSenderId: "138898925921",
    appId: "1:138898925921:web:ce1ae81e9d56bea2cfbd20",
    measurementId: "G-2PHDBP8TCJ"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;