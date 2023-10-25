// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOXowQZp-BukcVRpYcqPwxHEG9KtiudXY",
  authDomain: "nk-system-1.firebaseapp.com",
  projectId: "nk-system-1",
  storageBucket: "nk-system-1.appspot.com",
  messagingSenderId: "311145277816",
  appId: "1:311145277816:web:cb7681fa2e6302e751008d",
  measurementId: "G-2G81L1G0C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);