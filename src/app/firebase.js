import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxbwAjMAdi-80n0isqPAobAcuZI3f6XC0",
  authDomain: "clone-1277e.firebaseapp.com",
  projectId: "clone-1277e",
  storageBucket: "clone-1277e.appspot.com",
  messagingSenderId: "1101226667",
  appId: "1:1101226667:web:4b3db85995cf5fa7304dee",
  measurementId: "G-LX6GX80GWW"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export  { db, auth, provider};
