// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaAbLEUHKPlT9LZzM-Gzcfzm9pxXYcJPg",
  authDomain: "slack-clone-b37ca.firebaseapp.com",
  databaseURL: "https://slack-clone-b37ca-default-rtdb.firebaseio.com",
  projectId: "slack-clone-b37ca",
  storageBucket: "slack-clone-b37ca.appspot.com",
  messagingSenderId: "15575128385",
  appId: "1:15575128385:web:6fc9e0f87912fb7f6be9c0",
  measurementId: "G-HQL6CCL0G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth =getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;

