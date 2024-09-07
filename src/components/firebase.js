// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYlgR6tf0O0vz6GxoS63q3Wp9z4e3o1zw",
  authDomain: "husban-ahmad-8b162.firebaseapp.com",
  projectId: "husban-ahmad-8b162",
  storageBucket: "husban-ahmad-8b162.appspot.com",
  messagingSenderId: "159395490825",
  appId: "1:159395490825:web:8a0879f2623758014fdcd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const providers = new GoogleAuthProvider();

export {auth, providers}
