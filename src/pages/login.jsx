import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import "./css/login.css";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const api = ""

const Login = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [UID, setUID] = useState("")
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [method, setMethod] = useState("None")

  async function handleLoginClick(event) {
    event.preventDefault();
  }

  async function handleSignupClick(event) {
    event.preventDefault();
  }

  return (
    <div className="container-for-login">
      {props.loggedIn === true ? <Navigate to="/" /> : ""}
      <input type="checkbox" id="check" />
      <div className="login form">
        <header>Login</header>
        <form action="#">
          <PhoneInput placeholder="Phone Number" value={phone} onChange={setPhone} required />
          <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" required autoComplete="false" />
          <button className='button' onClick={handleLoginClick} >Login</button>
        </form>
        <div className="signup">
          <span className="signup">Don't have an account? &nbsp;
            <label htmlFor="check">Signup</label>
          </span>
        </div>
      </div>
      <div className="registration form">
        <header>Signup</header>
        <form action="#">
          <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter your name" required />
          <PhoneInput placeholder="Phone Number (For Payment)" value={phone} onChange={setPhone} required />
          <select value={method} onChange={(e) => { setMethod(e.target.value) }}>
            <option value={"None"}>Select a Payment Method</option>
            <option value={"Bkash"}>Bkash</option>
            <option value={"Nagad"}>Nagad</option>
          </select>
          <input type="text" value={UID} onChange={(e) => { setUID(e.target.value) }} placeholder="Enter your Free Fire UID" required />
          <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Create a password" required autoComplete="false" />
          <input type="password" value={cpassword} onChange={(e) => { setcPassword(e.target.value) }} placeholder="Confirm your password" required autoComplete="false" />
          <button type='submit' className='button' onClick={handleSignupClick} >Signup</button>
        </form>
        <div className="signup">
          <span className="signup">Already have an account? &nbsp;
            <label htmlFor="check">Login</label>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login