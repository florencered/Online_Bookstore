import React from 'react'
import "./home.css"
const Home = () => {
  return (
    <div>
      <h1>Library Management System</h1> 
      <div className="input">
    <input type="text"/>
    <label for="name">Book Author</label> 

    </div> 
    <div className="input">
    <input type="text"/>
    <label for="name">Book Title</label> 

    </div> 
    <div className='status'>
    <button >AVAILABLE</button> 
    <button>UNAVAILABLE</button> 
    </div> 
    <div className='add'>
    <button>ADD/UPDATE</button>  
    </div>

      </div>
  )
}

export default Home