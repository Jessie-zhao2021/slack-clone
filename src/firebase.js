import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaAbLEUHKPlT9LZzM-Gzcfzm9pxXYcJPg",
    authDomain: "slack-clone-b37ca.firebaseapp.com",
    projectId: "slack-clone-b37ca",
    storageBucket: "slack-clone-b37ca.appspot.com",
    messagingSenderId: "15575128385",
    appId: "1:15575128385:web:6fc9e0f87912fb7f6be9c0",
    measurementId: "G-HQL6CCL0G6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider;

export { auth, provider };
export default db;

