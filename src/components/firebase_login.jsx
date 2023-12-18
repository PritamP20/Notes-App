
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfiglogin = {
  apiKey: "AIzaSyAzSpp1NO3yjRleAFEZkHtJPRQM7_a-Iss",
  authDomain: "login-65b8e.firebaseapp.com",
  projectId: "login-65b8e",
  storageBucket: "login-65b8e.appspot.com",
  messagingSenderId: "516984327453",
  appId: "1:516984327453:web:6e587d7b87871fca60e5f4",
  measurementId: "G-FRXQGS8C9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfiglogin);
const storagelogin = getStorage(app);