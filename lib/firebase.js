import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyA0FnyuF7G_buUSR67Crykb4sA-d0ubp3M',
    authDomain: 'swr-firebase.firebaseapp.com',
    projectId: 'swr-firebase',
    storageBucket: 'swr-firebase.appspot.com',
    messagingSenderId: '29822538897',
    appId: '1:29822538897:web:54b2845559b95bdc155b30'
  });
}

export const db = firebase.firestore();

export default firebase;
