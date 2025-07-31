// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdys7q8zytkU21w5njwxpIU1lMIC012YA",
  authDomain: "moviefinder-2ecb2.firebaseapp.com",
  projectId: "moviefinder-2ecb2",
  storageBucket: "moviefinder-2ecb2.firebasestorage.app",
  messagingSenderId: "1025653807241",
  appId: "1:1025653807241:web:b447513db088adcc1c4e58",
  measurementId: "G-EDC6X67F9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()