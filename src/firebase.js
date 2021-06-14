import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAx_RnYW15lWWHHfTc3pm3F6rcBx5mPMGM",
  authDomain: "musicstore-ui-b8216.firebaseapp.com",
  projectId: "musicstore-ui-b8216",
  storageBucket: "musicstore-ui-b8216.appspot.com",
  messagingSenderId: "808585267910",
  appId: "1:808585267910:web:28879d460d828701a3a5c7",
  measurementId: "G-F0LQVS926D",
});

const auth = firebase.auth();

export { auth };
