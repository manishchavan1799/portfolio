// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdlg5bf_57ORXbeqJwiMZxPBy7wpHs-hg",
  authDomain: "manish-react-portfolio.firebaseapp.com",
  projectId: "manish-react-portfolio",
  storageBucket: "manish-react-portfolio.appspot.com",
  messagingSenderId: "380241170046",
  appId: "1:380241170046:web:9c129a9e0b433de266522f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore();