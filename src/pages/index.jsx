import React, { useEffect } from 'react'
import { Navigate } from "react-router-dom";
import api from '../server/api';

const Home = (props) => {
  const authtoken = localStorage.getItem("tokenflg");

  const getDetails = async () => {
    const url = api + "/api/routes/getUserDetails.php";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authtoken,
        },
        body: JSON.stringify({ req: "`balance`"})
      });
      const json = await response.json();
      if (json["response_code"] === 200) {
        props.setBalance(json['response_data'].balance)        
      } else {
        alert("Something Went Wrong!");
        console.log(json['response_desc']);
      }
    } catch (error) {
      alert("Something Went Wrong!");
      console.log(error);
    }
  }

  useEffect(() => {
    getDetails()
  }, [])
  return (
    <>
      {props.loggedIn === false ? <Navigate to="/login" /> : ""}
      Home
    </>
  )
}

export default Home