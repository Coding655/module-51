// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2ain6hjs-nG9y9I2yCOzkau5TIbBfiAc",
  authDomain: "fir-authintegration-4a07c.firebaseapp.com",
  projectId: "fir-authintegration-4a07c",
  storageBucket: "fir-authintegration-4a07c.appspot.com",
  messagingSenderId: "239666175969",
  appId: "1:239666175969:web:9eb154d89ad259eaa8fca0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;