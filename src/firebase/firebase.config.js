// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaDWbppicWjtobbx6bFNw-OwESrc9oEA8",
  authDomain: "simple-website-auth-1.firebaseapp.com",
  projectId: "simple-website-auth-1",
  storageBucket: "simple-website-auth-1.appspot.com",
  messagingSenderId: "144017282872",
  appId: "1:144017282872:web:afaed0a069e8d9505513cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};