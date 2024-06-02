// import React, { useState } from 'react';
import Register from './components/Register'
import Navbar from './components/Navbar';
import Login from './components/Login';

export default function App() {
  // const [allowLogin,setAllowLogin] = useState(false)
  // const handleLoginClick=()=>{
  //   setAllowLogin(true);
  // }
  return (
    <div className='App'>
      <Navbar/>
      <Register/>
      <Login/>
    </div>
  );
}
