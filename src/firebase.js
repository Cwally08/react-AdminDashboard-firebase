import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-admin-45828.firebaseapp.com",
  projectId: "react-admin-45828",
  storageBucket: "react-admin-45828.appspot.com",
  messagingSenderId: "915683652492",
  appId: "1:915683652492:web:bb5cf655684d32718b9ca9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);