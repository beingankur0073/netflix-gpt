// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6NmcEbyIJTw5TfeZ1z-4zvoHdH7-lcHc",
  authDomain: "netflix-gpt-backend-49475.firebaseapp.com",
  projectId: "netflix-gpt-backend-49475",
  storageBucket: "netflix-gpt-backend-49475.firebasestorage.app",
  messagingSenderId: "432599585154",
  appId: "1:432599585154:web:10bf9dc32150b81e083f9b",
  measurementId: "G-G7213V6CF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()