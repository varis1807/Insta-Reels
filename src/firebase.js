import firebase from "firebase/app";

import "firebase/firestore";
//step 1
import "firebase/auth";

import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyBvK9jC13--CmOGS_7a8x1VESYroW1EJ3M",
  authDomain: "reels-30b5f.firebaseapp.com",
  projectId: "reels-30b5f",
  storageBucket: "reels-30b5f.appspot.com",
  messagingSenderId: "555165403038",
  appId: "1:555165403038:web:64eab30fa9b40b2b6d788f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage=firebase.storage()

export const firestore = firebase.firestore();
//step2

export const auth = firebase.auth();
//step 3=> firebase console: enable google login in auth panel

//step 4 Google Provider
let provider = new firebase.auth.GoogleAuthProvider();
//ae function ky krta hai??
// ans= ae function auth object hai iske andar ek method hai signInWithPopup vo call krta hai aur usko provide deta hai
// Isko fir export krte hai and logInwithGoogle btn pe onclick lgake access kr lete hai........
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Email Provider1
let provider1 = new firebase.auth.EmailAuthProvider();
export const signInWithEmail = () => auth.signInWithPopup(provider1);

export default firebase;
