// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgzWMS7w3PzGfHqvYW4d5L89uuEryRM78",
  authDomain: "student-management-system-860.firebaseapp.com",
  databaseURL: "https://student-management-system-860-default-rtdb.firebaseio.com",
  projectId: "student-management-system-860",
  storageBucket: "student-management-system-860.appspot.com",
  messagingSenderId: "785486981095",
  appId: "1:785486981095:web:491b9170d8125770573f42",
  measurementId: "G-3T881VR70D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);