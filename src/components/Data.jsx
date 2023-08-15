import React from 'react'
import { useState,useEffect } from 'react'; 
import {db} from "../FirebaseConfig";
import {collection,getDocs} from "firebase/firestore"; 
import "./Table";
const Data = () => { 
    const [users,setUsers]=useState([]); 
    //creating a reference to our database named book after using the db variable
    const usersCollectionRef=collection(db,"book");
    //this hook is basically a function which is called whenever the page renders
    useEffect(()=>{
        const getUsers = async ()=>{ 
            const data= await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc)=>({...doc.data,id:doc.id})))

        } 
        getUsers();
    },[])
  return (
    <div><createData users={users}/></div>
  )
}

export default Data