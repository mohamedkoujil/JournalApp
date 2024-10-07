// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB9Fz-O5aeUJd2cLStV-SCXyDQVmf2jX8",
  authDomain: "journal-app-37ea6.firebaseapp.com",
  projectId: "journal-app-37ea6",
  storageBucket: "journal-app-37ea6.appspot.com",
  messagingSenderId: "740999501419",
  appId: "1:740999501419:web:bb2930be22b499390a832e",
  measurementId: "G-Z6RZRBKQ4K",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
