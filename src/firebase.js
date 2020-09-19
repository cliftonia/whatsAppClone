import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3ho15dDyvUSTTAuFUQRUQg-uchlGrMyA",
  authDomain: "whats-app-clone-adbe0.firebaseapp.com",
  databaseURL: "https://whats-app-clone-adbe0.firebaseio.com",
  projectId: "whats-app-clone-adbe0",
  storageBucket: "whats-app-clone-adbe0.appspot.com",
  messagingSenderId: "82631750223",
  appId: "1:82631750223:web:2965cd6167f74927f8f03a",
  measurementId: "G-R540B26MT5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
