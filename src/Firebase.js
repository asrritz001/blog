// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getauth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPAX69kSMW6JL3LDL5Jh329O8yUdbQeyM",
  authDomain: "myweb-672e4.firebaseapp.com",
  projectId: "myweb-672e4",
  storageBucket: "myweb-672e4.appspot.com",
  messagingSenderId: "418058474504",
  appId: "1:418058474504:web:7680fa65098657cab4adbd",
  measurementId: "G-EK9SQY2YMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getauth(app);



