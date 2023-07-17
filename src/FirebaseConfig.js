// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GithubAuthProvider,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = { 
  apiKey:`${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket:`${process.env.REACT_APP_STORAGE_ID}` ,
  messagingSenderId:`${process.env.REACT_APP_SENDER_ID}` ,
  appId: `${process.env.REACT_APP_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app); 
const provider = new GoogleAuthProvider(); 
const providerGit= new GithubAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email; 
      alert("signed in with google successfully")
      
      
    })
    .catch((error) => { 

      console.log(error);  
      alert(error);
      
    });
}; 
export const signInWithGithub=()=>{
  signInWithPopup(auth, providerGit)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result); 
    console.log("Github access token",credential);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user; 
    console.log("github user",user);
    // IdP data available using getAdditionalUserInfo(result)
    // ... 
    alert("you have been signed in successfully");
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ... 
    console.log(errorMessage);
    console.log(credential); 
    alert(errorMessage);
  }); 

}
