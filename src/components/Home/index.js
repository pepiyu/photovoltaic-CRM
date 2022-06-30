import Navbar from '../Navbar/Navbar';
import Profile from '../Profile.js';
import PanelAccounts from '../PanelAccounts';
import Login from '../Login.js'
import AccountDetail from '../AccountDetail';
import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Auth from '../../services/ServiceAuth'
import { Main } from './styles'
function Home () {


  const [toggleOpen, setToggleOpen] = useState(false)
  const[loggedIn, setLoggedIn] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {

/*     const token = localStorage.getItem('token')
    
    if(token){
      setLoggedIn(true)
      navigate('/')
    }else{
      navigate('/login')
    } */
    
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
    <>
      <Navbar
        onProfileClick={()=>onProfileClick()}
        loggedIn={loggedIn}
      />

      <Main className="container">
        <Routes>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}/>
          <Route path="/profile" element={<Profile logout={logout} onProfileClick={onProfileClick}/>}/>
          <Route path="/" element={<PanelAccounts/>}/>
          <Route path="/account-detail/:id" element={<AccountDetail />}/>

        </Routes>


      </Main>
      


    </>

    )
}


export default Home;
