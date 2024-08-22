import React from 'react'
import NavIcon from '/nav-icon.png'
import './index.css'
import MonSec from '../MonSec'

const Navbar = (loggedIn) => {
    return (
        <nav>
            <img src={NavIcon}/>
            <MonSec loggedIn={loggedIn}/>
        </nav>
    )
}

export default Navbar