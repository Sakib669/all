// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN_lGidPx9fRlgXGxwQeBBeMqqeNrtzDI",
  authDomain: "dimple-firebase-f169b.firebaseapp.com",
  projectId: "dimple-firebase-f169b",
  storageBucket: "dimple-firebase-f169b.appspot.com",
  messagingSenderId: "245899752094",
  appId: "1:245899752094:web:ba378b394ce5d9b068818f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {
    app
}