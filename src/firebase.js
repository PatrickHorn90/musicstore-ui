import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA99WsVskNB0Wq4TeiRyAB--uVPdLmTz4E",
  authDomain: "sweetwater-clone.firebaseapp.com",
  projectId: "sweetwater-clone",
  storageBucket: "sweetwater-clone.appspot.com",
  messagingSenderId: "680636833830",
  appId: "1:680636833830:web:f26675d45d659e02aac6e7",
  measurementId: "G-24K8MV25NH",
});

const auth = firebase.auth();

export { auth };
