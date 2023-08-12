import React from 'react' 
import "./login.css"; 
import { useState } from 'react'; 
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth"; 
import { auth,provider,providerGit} from "../../FirebaseConfig"; 
import { signInWithPopup } from "firebase/auth";
import Cookies from 'universal-cookie';
//declare the coookie for using it 
const cookies=new Cookies();
const Login = ({setIsAuth}) => {   
const [email,setEmail] =useState("");
const [password,setPassword]=useState("");
const signInWithGoogle = () => {
	signInWithPopup(auth, provider)
	  .then((result) => { 
		cookies.set("auth-token",result.user.refreshToken); 
		console.log(result.user.refreshToken);
		const name = result.user.displayName;
		const email = result.user.email; 
		alert("signed in with google successfully")
		setIsAuth(true);
		
		
	  })
	  .catch((error) => { 
  
		console.log(error); 
		alert(error);
		
	  });
  }; 
 const signInWithGithub=()=>{
	signInWithPopup(auth, providerGit)
	.then((result) => { 
	  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
	  
	  cookies.set("auth-token",result.user.refreshToken);
  
	  // The signed-in user info.
	  const user = result.user; 
	  console.log("github user",user);
	  // IdP data available using getAdditionalUserInfo(result)
	  // ... 
	  alert("you have been signed in successfully"); 
	  setIsAuth(true);
	}).catch((error) => {
	  // Handle Errors here.
	  const errorCode = error.code;
	  const errorMessage = error.message;
	  // The email of the user's account used.
	  const email = error.customData.email;
	  // The AuthCredential type that was used.
	  
	  alert(errorMessage);
	}); 
  
  }
  
const signUp= ()=>{      
	
	console.log("entered");
	createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.accessToken); 
	cookies.set("auth-token",user.accessToken); 
	alert("Created account successfully");
	setIsAuth(true);
  })
  .catch((error) => {
    const errorMessage = error.message; 
	console.log("error logged"); 
	alert(errorMessage);
    // ..
  });
	
} 
const loginUser=()=>{
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user; 
	console.log(user.accessToken);
	cookies.set("auth-token",user.accessToken);
	setIsAuth(true);
	alert("logged in successfully");
  })
  .catch((error) => {
    const errorMessage = error.message; 
	alert(errorMessage);
  });
}


	//sign in function
  return ( 
    <div className='wrapper'>
    <div className="form-container">
	<p className="title">LOGIN/SIGN UP</p>
	<form className="form">
		<div className="input-group">
			<label htmlFor="username">Email</label>
			<input type="text" name="username" id="username" placeholder="enter your username" onChange={(e)=>setEmail(e.target.value)}/>
			
		</div>
		<div className="input-group">
			<label htmlFor="password">Password</label>
			<input type="password" name="password" id="password" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)}/>
			<div className="forgot">
				<a  href="#">Forgot Password ?</a>
			</div>
		</div>
		<button className="sign" type='button' onClick={loginUser}>Login
			{/* {register?(
				"Register"
			):
			"Login"
			} */}
		</button> 
		<button className="sign" type='button' onClick={signUp}>Create Account
			{/* {register?(
				"Register"
			):
			"Login"
			} */}
		</button>
	</form>
	<div className="social-message">
		<div className="line"></div>
		<p className="message">Login with social accounts</p>
		<div className="line"></div>
	</div>
	<div className="social-icons">
		<button aria-label="Log in with Google" className="icon" onClick={signInWithGoogle}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
		<button aria-label="Log in with GitHub" className="icon" onClick={signInWithGithub}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
		</button>
	</div>
	<p className="signup">Refresh the page before entering new credentials
		
	</p>
</div> 
</div>

  )
}

export default Login