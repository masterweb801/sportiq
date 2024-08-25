import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import "./css/login.css";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import api from '../server/api';

const Login = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [UID, setUID] = useState("")
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");

  async function handleLoginClick(event) {
    event.preventDefault();
    const url = api + "api/routes/login.php";
    // try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, password })
    });
    const json = await response.json();
    if (json['response_code'] === 200) {
      localStorage.setItem('tokenflg', json['response_data'])
      props.setLoggedIn(true);
    } else {
      alert("Invalid Credentials")
    }

    setPhone("");
    setPassword("");
    // } catch (error) {
    //   console.log(error);
    // }
  }

  async function handleSignupClick(event) {
    event.preventDefault();
    if (password === cpassword) {
      const url = api + "api/routes/signup.php";
      // try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          uid: UID,
          password: password
        })
      });
      const json = await response.json();
      console.log(json)
      if (json['response_code'] === 200) {
        localStorage.setItem('tokenflg', json['response_data'])
        props.setLoggedIn(true);
      } else {
        alert(json['response_desc'])
      }
    } else {
      alert("Passwords doesn't matched!")
    }
    setName("")
    setUID("")
    setPhone("")
    setPassword("")
    setcPassword("")
  }

  return (
    <div className="container-for-login">
      {props.loggedIn === true ? <Navigate to="/" /> : ""}
      <input type="checkbox" id="check" />
      <div className="login form">
        <header>Login</header>
        <form action="#" onSubmit={handleLoginClick}>
          <PhoneInput placeholder="Phone Number" value={phone} onChange={setPhone} required />
          <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" required autoComplete="false" />
          <button className='button' type='submit' >Login</button>
        </form>
        <div className="signup">
          <span className="signup">Don't have an account? &nbsp;
            <label htmlFor="check">Signup</label>
          </span>
        </div>
      </div>
      <div className="registration form">
        <header>Signup</header>
        <form action="#" onSubmit={handleSignupClick}>
          <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter your name" required />
          <PhoneInput placeholder="Phone Number " value={phone} onChange={setPhone} required />
          <input type="text" value={UID} onChange={(e) => { setUID(e.target.value) }} placeholder="Enter your Free Fire UID" required />
          <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Create a password" required autoComplete="false" />
          <input type="password" value={cpassword} onChange={(e) => { setcPassword(e.target.value) }} placeholder="Confirm your password" required autoComplete="false" />
          <button type='submit' className='button'>Signup</button>
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