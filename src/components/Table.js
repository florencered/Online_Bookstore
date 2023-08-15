import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react'; 
import {db} from "../FirebaseConfig";
import {collection,getDocs,doc,deleteDoc} from "firebase/firestore"; 


    
export default function BaseTable() {  
  const [users,setUsers]=useState([]); 
  //creating a reference to our database named book after using the db variable 
  
  const usersCollectionRef=collection(db,"book");
  //this hook is basically a function which is called whenever the page renders 
  const deleteUser=async (id)=>{
    const bookDoc=doc(db,"book",id);
    await deleteDoc(bookDoc);
  }
  useEffect(()=>{
      const getUsers = async ()=>{ 
          const data= await getDocs(usersCollectionRef); 
          setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id}))) 
          console.log(users);
      } 
      getUsers(); 
      
  },[])
 
  return ( 
    <div className='container' style={{width:"70vw",marginLeft:"auto",marginRight:"auto"}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell><b>Book Title</b></TableCell>
            <TableCell ><b>Book Author</b></TableCell>
            <TableCell><b>Status</b></TableCell>
            <TableCell style={{paddingLeft:"2rem"}}><b>Action</b></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.title}
              </TableCell>
              <TableCell >{user.author}</TableCell>
              <TableCell >{user.status}</TableCell>
              <TableCell> 
                {/* //if a function has arguments,we need arrows to define it */}
                <button className='styled' onClick={()=>{deleteUser(user.id)}}>DELETE</button>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
    </div>
  );
}
