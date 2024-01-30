// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6WzyH2AkHqahGgfa06mEOthXu7mEZV1g",
  authDomain: "expense-tracker-9c6e5.firebaseapp.com",
  projectId: "expense-tracker-9c6e5",
  storageBucket: "expense-tracker-9c6e5.appspot.com",
  messagingSenderId: "595112899067",
  appId: "1:595112899067:web:645087f2c0fed2b2c15b5e",
  measurementId: "G-30HQLN01J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =  getAuth(app);
export const provider = new GoogleAuthProvider();
export const db= getFirestore(app);

//firebase login
//firebase init
//firebase deploy