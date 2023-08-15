// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getFirestore} from "@firebase/firestore"
import { getAuth,GithubAuthProvider,GoogleAuthProvider } from "firebase/auth";
import Cookies from 'universal-cookie';  

const cookies=new Cookies();
const firebaseConfig = {
  
  apiKey:`${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_ID}`,
  messagingSenderId:`${process.env.REACT_APP_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app); 
export const provider = new GoogleAuthProvider(); 
export const providerGit= new GithubAuthProvider(); 
export const db = getFirestore();

