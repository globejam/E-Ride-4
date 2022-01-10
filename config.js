import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCfaz4ZMUz2p2AIoKaVx0uPYxbLYVQvI7U",
    authDomain: "e-ride-cfe3c.firebaseapp.com",
    projectId: "e-ride-cfe3c",
    storageBucket: "e-ride-cfe3c.appspot.com",
    messagingSenderId: "523131981817",
    appId: "1:523131981817:web:332162137ea0c0e4a1f728"
  };





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


