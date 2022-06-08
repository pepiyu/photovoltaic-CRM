import './App.css';
import Navbar from './components/Navbar.js';
import PostsList from './components/PostsList.js';
import Profile from './components/Profile.js';
import React, { Fragment, useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from './components/Login.js'
import {getProfileByID, getPosts, logOut} from './services/API.js'
import { setStorageToken } from './services/helpers'


function App () {


  const [toggleOpen, setToggleOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [profile, setProfile] = useState([])
  const[posts, setPosts] = useState([])
  const[loggedIn, setLoggedIn] = useState(false)
  const [resetFilter, setResetFilter] = useState(false)
  const [account, setAccount] = useState([])

  const navigate = useNavigate()

  useEffect(() => {

    const id = localStorage.getItem('id')
    
    if(id){
      getProfileByID(id).then(response =>{
        setStorageToken(response)
        //onLoginComplete(response)
          navigate('/')
        })
    }else{
      navigate('/login')
    }
    
  }, [])


  function onLoginComplete (profile) {
    console.log(profile);
    localStorage.setItem('id', profile.id);
    localStorage.setItem('token', profile.token);
    getPosts()
    .then(response => {
        setPosts(response)
    })
    setLoggedIn(true)
    setProfile(profile)
  }
  
  const logout = () => {
    
    logOut().then(
      localStorage.removeItem('id')
      
      )
      setLoggedIn(false)
      navigate('/login')

  }
  
  function onLogoClick() {

    setResetFilter(true)
    
  }
  
  function onProfileClick() {
    
    toggleOpen ? navigate('/') : navigate('/profile')
    setToggleOpen(!toggleOpen)
    
  }
  
  function onNavClick() {
    
    setNavOpen(!navOpen)
  }
  


    return (
    <div className="App">
      <Navbar
      onProfileClick={()=>onProfileClick()}
      onLogoClick={()=>onLogoClick()}
      onNavClick={()=>onNavClick()}
      toggleOpen={setToggleOpen}
      navOpen={setNavOpen}
      loggedIn={loggedIn}
      />

      
      <main className="container py-5">

      <Routes>
        <Route path="/login" element={<Login onLoginComplete={(profile)=>onLoginComplete(profile)} setAccount={setAccount}/>}/>

        <Route path="/profile" element={<Profile profile={profile} logout={logout}/>}/>

        <Route path="/" element={
          
            <Fragment>
              <div className="row my-3">

                <PostsList
                posts={posts}
                setPosts={setPosts}
                resetFilter={resetFilter}
                setResetFilter={setResetFilter}
                />

              </div>
            </Fragment>
            
          }>

        </Route>


    </Routes>
      </main>

    </div>

    )
}


export default App;
