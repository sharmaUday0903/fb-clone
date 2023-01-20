import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFow9cJDovKkGCoMCmhetbCEmuVnBskg0",
  authDomain: "facebook-clone-468fc.firebaseapp.com",
  projectId: "facebook-clone-468fc",
  storageBucket: "facebook-clone-468fc.appspot.com",
  messagingSenderId: "666626921830",
  appId: "1:666626921830:web:2993d45eaf5908dc65a4a7",
  measurementId: "G-05HH3KB9R4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
