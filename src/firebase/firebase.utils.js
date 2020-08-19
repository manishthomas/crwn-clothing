import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyDRYgjvCafy8zxwCW7CY7HnaWMyMEwyYLQ',
  authDomain: 'crwn-db-12b7d.firebaseapp.com',
  databaseURL: 'https://crwn-db-12b7d.firebaseio.com',
  projectId: 'crwn-db-12b7d',
  storageBucket: 'crwn-db-12b7d.appspot.com',
  messagingSenderId: '1094706486194',
  appId: '1:1094706486194:web:753d75f506b6bfd5e322ab',
  measurementId: 'G-ZJKE8VZJ1M',
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
