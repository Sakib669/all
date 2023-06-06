// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALaZrOjO_J45QSxtPXjzqMy9Ekg_2DiMY",
  authDomain: "email-password-auth-cddff.firebaseapp.com",
  projectId: "email-password-auth-cddff",
  storageBucket: "email-password-auth-cddff.appspot.com",
  messagingSenderId: "957054949551",
  appId: "1:957054949551:web:fc475aab986b00217a9c5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  {app};