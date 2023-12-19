import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfigLogin = {
  apiKey: "AIzaSyBO92WovG3NCI2tV0wbmfOw8HSRP7h5ffs",
  authDomain: "loginpage-76524.firebaseapp.com",
  projectId: "loginpage-76524",
  storageBucket: "loginpage-76524.appspot.com",
  messagingSenderId: "47625877029",
  appId: "1:47625877029:web:9cfa1b94b735ea144a31cc"
};

// Initialize Firebase
export const appLogin = initializeApp(firebaseConfigLogin);

// Initialize Firebase Authentication and get a reference to the service
export const authlogin = getAuth(appLogin);
