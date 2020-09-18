import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyBiwMkbUGKjP0hBM1IjIvZPm4_XRZYAnQ0',
  authDomain: 'crwn-db-6e50d.firebaseapp.com',
  databaseURL: 'https://crwn-db-6e50d.firebaseio.com',
  projectId: 'crwn-db-6e50d',
  storageBucket: 'crwn-db-6e50d.appspot.com',
  messagingSenderId: '765699122745',
  appId: '1:765699122745:web:39ca20f4c0629ededc4fe8',
  measurementId: 'G-8B7M3ZJ8MN',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  promt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
