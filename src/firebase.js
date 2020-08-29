import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBF7AJBMF6Z7FDGNY5JmyeOn_EUJVNylAM",
    authDomain: "messenger-clone-808b3.firebaseapp.com",
    databaseURL: "https://messenger-clone-808b3.firebaseio.com",
    projectId: "messenger-clone-808b3",
    storageBucket: "messenger-clone-808b3.appspot.com",
    messagingSenderId: "627820364596",
    appId: "1:627820364596:web:c8e7880264ae28382e1b61",
    measurementId: "G-7BCGX0PFMD"
});

const db = firebaseApp.firestore();

export default db;