import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAS_WKq_2XtluQIqH7ofcsPubJgd9ajQo4",
  authDomain: "facebook-messenger-clone-31f97.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-31f97.firebaseio.com",
  projectId: "facebook-messenger-clone-31f97",
  storageBucket: "facebook-messenger-clone-31f97.appspot.com",
  messagingSenderId: "303762061866",
  appId: "1:303762061866:web:c5ab15fd047e55162de153",
  measurementId: "G-01R3PG2V09",
});

const db = firebaseApp.firestore();

export default db;
