// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4KgIIAffeAzy4mYc2exeMS_Ojcm6uiQk",
  authDomain: "auth-test-101-a5d9a.firebaseapp.com",
  projectId: "auth-test-101-a5d9a",
  storageBucket: "auth-test-101-a5d9a.appspot.com",
  messagingSenderId: "487598040849",
  appId: "1:487598040849:web:e1d03ddcb3d07a71a60eb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};