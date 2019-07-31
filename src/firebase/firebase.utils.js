import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCoTqKrsOTPgllgSxFlp0BrAMO8cpr_cbA",
  authDomain: "kruna-db1.firebaseapp.com",
  databaseURL: "https://kruna-db1.firebaseio.com",
  projectId: "kruna-db1",
  storageBucket: "",
  messagingSenderId: "177041451728",
  appId: "1:177041451728:web:2ab9e2a9edb6187a"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData

        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    
  }
  return userRef;
}   



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;