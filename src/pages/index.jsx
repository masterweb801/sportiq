import React from 'react'
import { Navigate } from "react-router-dom";

const Home = (props) => {
  return (
    <>
    {props.loggedIn === false ? <Navigate to="/login" /> : ""}
      Home
    </>
  )
}

export default Home