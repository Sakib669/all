// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC66irBeJSV4NMBk8dlsdMai49XNR8Fb6Q",
  authDomain: "travel-guru-37c4b.firebaseapp.com",
  projectId: "travel-guru-37c4b",
  storageBucket: "travel-guru-37c4b.appspot.com",
  messagingSenderId: "5490189507",
  appId: "1:5490189507:web:8e84b6bf69dfac3eb2ee76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;