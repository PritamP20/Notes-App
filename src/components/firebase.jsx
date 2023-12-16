import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBIFvmD20ogOAa2hue7qFbp9r3W6118B_4",
    authDomain: "fir-app-5920f.firebaseapp.com",
    projectId: "fir-app-5920f",
    storageBucket: "fir-app-5920f.appspot.com",
    messagingSenderId: "380256160623",
    appId: "1:380256160623:web:49d09bc7e2bc280863769a"
  };

  export const app = initializeApp(firebaseConfig)
  export const storage = getStorage()