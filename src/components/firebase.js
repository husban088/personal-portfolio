// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTUnaEhYvKeTPDTPoV9bidAiEltMTRJOI",
  authDomain: "husban-ahmad-5d478.firebaseapp.com",
  projectId: "husban-ahmad-5d478",
  storageBucket: "husban-ahmad-5d478.appspot.com",
  messagingSenderId: "575121487341",
  appId: "1:575121487341:web:995926b453b717c8dc63e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const providers = new GoogleAuthProvider();

export {auth, providers}