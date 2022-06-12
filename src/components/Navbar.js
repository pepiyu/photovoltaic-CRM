import React from 'react'
import { Link } from 'react-router-dom'

function Navbar ({onProfileClick, loggedIn}) {

    const profileIcon = () => {
        return (
            !loggedIn ? '' : 
            <a className="user btn" id="user" onClick={() => {onProfileClick()}}><i className="far fa-user-circle"></i></a>

        )
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">CRM</Link>

            {profileIcon()}
        
    </nav>
    )
}


export default Navbar