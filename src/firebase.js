// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWzbqP_0cbR7cY17Sueyf46quVCbOF9wo",
  authDomain: "fed-chat-2ece0.firebaseapp.com",
  projectId: "fed-chat-2ece0",
  storageBucket: "fed-chat-2ece0.appspot.com",
  messagingSenderId: "478398083465",
  appId: "1:478398083465:web:d57d9617720f195ea0b158",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
