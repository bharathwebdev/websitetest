// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApzC_-Ezd7zM0yVy3t00M6u5C5kwe5eW8",
  authDomain: "drestein2022-930de.firebaseapp.com",
  projectId: "drestein2022-930de",
  storageBucket: "drestein2022-930de.appspot.com",
  messagingSenderId: "486120902556",
  appId: "1:486120902556:web:f22051499e3a786d5a8259",
  measurementId: "G-XRJDB3PQF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore()
const analytics = getAnalytics(app);
