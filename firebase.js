// Import the functions you need from the SDKs you need
import firebase from "firebase";
require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4gxjwMBLXtSA_lG5N686UQS7gIcNjrFg",
  authDomain: "wosil-eb7e7.firebaseapp.com",
  projectId: "wosil-eb7e7",
  storageBucket: "wosil-eb7e7.appspot.com",
  messagingSenderId: "392166822396",
  appId: "1:392166822396:web:2aa7d259e922f9acb6e279",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
