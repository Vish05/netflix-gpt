// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFfmiWjExcXyYqQli_7DY4f37Rqhsi7CY",
  authDomain: "netflixgpt-3cd4f.firebaseapp.com",
  projectId: "netflixgpt-3cd4f",
  storageBucket: "netflixgpt-3cd4f.appspot.com",
  messagingSenderId: "44293836818",
  appId: "1:44293836818:web:005f4765764ee1e18988cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
