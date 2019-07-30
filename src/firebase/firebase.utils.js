import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC1BsbKxTMCDZTLgZ7FTYUmy7yIvwDT8mg",
    authDomain: "kruna-db.firebaseapp.com",
    databaseURL: "https://kruna-db.firebaseio.com",
    projectId: "kruna-db",
    storageBucket: "",
    messagingSenderId: "402112890799",
    appId: "1:402112890799:web:96bb4438f183c2b4"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;