import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDdYiozQo2y_ECs7RsZg-2OsqHAtURTeqs",
  authDomain: "creative-block-5e3bb.firebaseapp.com",
  projectId: "creative-block-5e3bb",
  storageBucket: "creative-block-5e3bb.appspot.com",
  messagingSenderId: "732218817574",
  appId: "1:732218817574:web:97ef874e3be7ec24213ae7",
  measurementId: "G-BRQRJWX5YG"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
