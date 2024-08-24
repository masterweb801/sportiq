import React from 'react'
import './index.css'

const MonSec = (props) => {
    return (
        <>
            {props.loggedIn === true ? <div className='monsec'>
                    {props.money} <button className='wdrBtn'><i className="fa-solid fa-plus"></i></button>
                </div>:<button className='monsec'>Login</button>
            }
        </>
    )
}

export default MonSec