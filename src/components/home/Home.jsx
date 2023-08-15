import React from 'react'
import "./home.css"  
import "../Table.js"
import BaseTable from '../Table.js' 
import { useState } from 'react'  
import {db,auth} from "../../FirebaseConfig.js"
import {collection,addDoc} from "firebase/firestore";  
import { signOut } from "firebase/auth"; 
import Cookies from 'universal-cookie';
const cookies=new Cookies();
const Home = ({setIsAuth}) => {  
  const usersCollectionRef=collection(db,"book");
  //add author name and title 
  const [newTitle,setNewTitle]=useState("");
  const [newAuthor,setNewAuthor]=useState(""); 
  const [newAvailable,setAvailable]=useState(""); 
  const available=()=>{
    return setAvailable("available");
  } 
  const unavailable=()=>{
    return setAvailable("unavailable");
  }
  const createUser=async ()=>{ 
    await addDoc(usersCollectionRef,{author:newAuthor,title:newTitle,status:newAvailable})

  } 
  const logOut= ()=>{
    signOut(auth).then(() => {
      // Sign-out successful. 
      console.log("signed out"); 
      cookies.remove("auth-token");
      setIsAuth(null);
    }).catch((error) => {
      // An error happened. 
      console.log(error);
    });
      
  }
  
  return (
    <div>
      <h1 style={{textAlign:"center",marginTop:"2rem"}}>Library Management System(kindly refresh the page after entering the data)</h1> 
      <div className="input">
    <input type="text" className="heading" onChange={(e)=>{setNewAuthor(e.target.value)}}/>
    <label for="name" className='label'>Book Author</label> 

    </div> 
    <div className="input">
    <input type="text" className="heading" onChange={(e)=>{setNewTitle(e.target.value)}}/>
    <label for="name">Book Title</label> 

    </div> 
    <div className='status'style={{paddingRight:"10rem",paddingLeft:"40rem",height:"20vh",paddingTop:"3rem"}}>
    <button className='styled' onClick={available}>AVAILABLE</button> 
    <button className='styled'onClick={unavailable}>UNAVAILABLE</button>  
    <button className='styled' onClick={createUser}>ADD/UPDATE</button>  
    </div>  
    <div>
      <BaseTable/>
    </div> 
    <div>
      <button className='styled'style={{marginTop:"2rem",marginLeft:"5rem"}}type='button'onClick={logOut}>LOGOUT</button>
    </div>

      </div>
  )
}

export default Home