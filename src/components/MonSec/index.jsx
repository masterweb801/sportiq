import React from 'react'
import './index.css'

const MonSec = (props) => {
    const Money = "100"
    return (
        <>
            {props.loggedIn === true ? <div className='monsec'>
                    {Money} <button className='wdrBtn'><i class="fa-solid fa-plus"></i></button>
                </div>:<button className='monsec'>Login</button>
            }
        </>
    )
}

export default MonSec