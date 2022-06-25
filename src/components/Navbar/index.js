import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Logo, Main } from './styles'

function Navbar ({onProfileClick, loggedIn}) {

    const profileIcon = () => {
        return (
            !loggedIn ? '' : 
            <a className="user btn" id="user" onClick={() => {onProfileClick()}}><i className="far fa-user-circle"></i></a>

        )
    }

    return (
    <Nav>
        <Main>
            <Link to="/">
                <Logo>CRM</Logo>
            </Link>

                {profileIcon()}
            


        </Main>
    </Nav>
    )
}


export default Navbar