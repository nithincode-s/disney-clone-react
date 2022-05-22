import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyC0q49vIJSYStBM9X1iXXcWDLTT_9VoBDY",
    authDomain: "disney-plus-db66d.firebaseapp.com",
    projectId: "disney-plus-db66d",
    storageBucket: "disney-plus-db66d.appspot.com",
    messagingSenderId: "124302162299",
    appId: "1:124302162299:web:37a712d751d44bec3765de",
    measurementId: "G-ZPMHMZ5035"
  };



  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// database 
const db = firebaseApp.firestore();

// authentication
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export {auth, provider, storage};

export default db;
