import React from 'react'
import NavIcon from '/nav-icon.png'
import './index.css'
import MonSec from '../MonSec'

const Navbar = (props) => {
    return (
        <nav>
            <img src={NavIcon}/>
            <MonSec loggedIn={props.loggedIn} money={props.money}/>
        </nav>
    )
}

export default Navbar