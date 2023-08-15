
import { useState } from 'react';
import './App.css';
import Login from './components/login/Login';  
import Cookies from 'universal-cookie';  
import Home from './components/home/Home';
//declare a new cookie 
const cookies=new Cookies();
function App() { 
  //if the user is already logged in once we wont get the log in page 
  const [isAuth,setIsAuth]=useState(cookies.get("auth-token")); 
if (!isAuth){
  return (
    <div className="App"> 
      <Login setIsAuth={setIsAuth}/>
    </div>
  );
} 
return <div><Home setIsAuth={setIsAuth}/></div>
  
}

export default App;
