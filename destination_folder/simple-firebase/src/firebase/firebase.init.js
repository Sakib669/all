// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5cme-9-xVFivsVtU_KXPWz41FXJWo7PY",
  authDomain: "simple-firebase-e3479.firebaseapp.com",
  projectId: "simple-firebase-e3479",
  storageBucket: "simple-firebase-e3479.appspot.com",
  messagingSenderId: "588062055570",
  appId: "1:588062055570:web:eee5f87dba435d4933da4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {
  app
}