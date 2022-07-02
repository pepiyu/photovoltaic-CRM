import Navbar from '../Navbar/Navbar';
import Profile from '../Profile.js';
import PanelAccounts from '../PanelAccounts';
import Login from '../Login.js'
import AccountDetail from '../AccountDetail';
import Contact from '../Contact';
import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Auth from '../../services/ServiceAuth'
import { Main, Page } from './styles'
import Sidebar from '../Sidebar'
import Parametrizable from '../Parametrizable';
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
    <Page>
      <Navbar
        onProfileClick={()=>onProfileClick()}
        loggedIn={loggedIn}
      />

      <Sidebar/>

      <Main className="container">
        <Routes>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}/>
          <Route path="/profile" element={<Profile logout={logout} onProfileClick={onProfileClick}/>}/>
          <Route path="/" element={<PanelAccounts/>}/>
          <Route path="/account-detail/:id" element={<AccountDetail />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/parametrizable" element={<Parametrizable />}/>

        </Routes>


      </Main>
      


    </Page>

    )
}


export default Home;
