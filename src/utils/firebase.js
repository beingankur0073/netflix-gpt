// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmy6vDwQWsv6vvPc0uGB4Ulf3ypIOvbKk",
  authDomain: "finder-c4645.firebaseapp.com",
  projectId: "finder-c4645",
  storageBucket: "finder-c4645.firebasestorage.app",
  messagingSenderId: "704484548505",
  appId: "1:704484548505:web:ec5c5ee9342460359e7d08",
  measurementId: "G-CY5ZXKZMXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()