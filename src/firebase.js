import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsklNGsapu6HfTBorcIA2wlOlxBGZ2PsM",
  authDomain: "linkedin-clone-794e4.firebaseapp.com",
  projectId: "linkedin-clone-794e4",
  storageBucket: "linkedin-clone-794e4.appspot.com",
  messagingSenderId: "574866507181",
  appId: "1:574866507181:web:dcaed914a1af3c3f8a0d24",
  measurementId: "G-CQJ6QWXZ88",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
export default firebase;