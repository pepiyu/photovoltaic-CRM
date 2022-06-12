import './App.css';
import Navbar from './components/Navbar.js';
import Profile from './components/Profile.js';
import Home from './components/Home';
import Login from './components/Login.js'
import AccountDetail from './components/AccountDetail';
import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Auth from './services/ServiceAuth'


function App () {


  const [toggleOpen, setToggleOpen] = useState(false)
  const[loggedIn, setLoggedIn] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {

    const token = localStorage.getItem('token')
    
    if(token){
      setLoggedIn(true)
      navigate('/')
    }else{
      navigate('/login')
    }
    
  }, [])

  
  const logout = () => {
    
    Auth.logout()
    setLoggedIn(false)
    navigate('/login')

  }

  
  function onProfileClick() {
    
    toggleOpen ? navigate('/') : navigate('/profile')
    setToggleOpen(!toggleOpen)
    
  }  


    return (
    <div className="App">
      <Navbar
        onProfileClick={()=>onProfileClick()}
        toggleOpen={setToggleOpen}
        loggedIn={loggedIn}
      />

      
      <main className="container py-5">

        <Routes>
          
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}/>

          <Route path="/profile" element={<Profile logout={logout} onProfileClick={onProfileClick}/>}/>

          <Route path="/" element={<Home/>}/>
          
          <Route path="/account-detail/:id" element={<AccountDetail />}/>



      </Routes>
      </main>

    </div>

    )
}


export default App;
