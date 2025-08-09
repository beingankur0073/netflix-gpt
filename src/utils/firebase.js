// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAax7Kqh4V_EJvvIB90ncEd3t7fiS-GRhA",
  authDomain: "finder-817fd.firebaseapp.com",
  projectId: "finder-817fd",
  storageBucket: "finder-817fd.firebasestorage.app",
  messagingSenderId: "547900992283",
  appId: "1:547900992283:web:7b6d177cf8f32dcbf301be",
  measurementId: "G-F97CR59E8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);