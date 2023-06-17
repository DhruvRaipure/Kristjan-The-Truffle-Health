// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfXhPybkubPRPXTakRD2RMGpY-JP7s1Yw",
  authDomain: "hospital-e70e2.firebaseapp.com",
  projectId: "hospital-e70e2",
  storageBucket: "hospital-e70e2.appspot.com",
  messagingSenderId: "397307001569",
  appId: "1:397307001569:web:4eb34d241bc4fd54a8d5a0",
  measurementId: "G-Q0XT2ERRJJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
