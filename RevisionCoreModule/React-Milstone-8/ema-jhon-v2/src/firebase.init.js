// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQEIqATdrTPBxneYg5tp0XguAQ3P8vptc",
  authDomain: "ema-jhon2-383db.firebaseapp.com",
  projectId: "ema-jhon2-383db",
  storageBucket: "ema-jhon2-383db.appspot.com",
  messagingSenderId: "871045371919",
  appId: "1:871045371919:web:3c2b0504a626c053ac2b7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;