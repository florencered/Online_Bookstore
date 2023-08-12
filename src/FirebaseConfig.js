// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GithubAuthProvider,GoogleAuthProvider } from "firebase/auth";
import Cookies from 'universal-cookie'; 
const cookies=new Cookies();
const firebaseConfig = {
  apiKey: "AIzaSyCWN3ZoekLCzBbkv8yV_E0968OJoH90FmQ",
  authDomain: "library-management-c23f9.firebaseapp.com",
  projectId: "library-management-c23f9",
  storageBucket: "library-management-c23f9.appspot.com",
  messagingSenderId: "31601921626",
  appId: "1:31601921626:web:d1f69cfbeee8d34a9e9263",
  measurementId: "G-2JP32ZM1W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app); 
export const provider = new GoogleAuthProvider(); 
export const providerGit= new GithubAuthProvider();

