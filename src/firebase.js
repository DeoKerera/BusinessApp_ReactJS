// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOvwbefXOYe2sfQk56iPA5NBe7XaRemIQ",
  authDomain: "businessapp-reactjs.firebaseapp.com",
  projectId: "businessapp-reactjs",
  storageBucket: "businessapp-reactjs.firebasestorage.app",
  messagingSenderId: "549348034635",
  appId: "1:549348034635:web:a8049e8bb4d780518065ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
