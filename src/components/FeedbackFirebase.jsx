import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfyxppzOuNznr74l_qaWc8W7C7PLUayDw",
  authDomain: "feedback-b245a.firebaseapp.com",
  databaseURL: "https://feedback-b245a-default-rtdb.firebaseio.com",
  projectId: "feedback-b245a",
  storageBucket: "feedback-b245a.appspot.com",
  messagingSenderId: "174572711622",
  appId: "1:174572711622:web:0433c4fab2e840c79b71c7",
  measurementId: "G-65T5QS2EC4"
};

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const db = getFirestore(app)