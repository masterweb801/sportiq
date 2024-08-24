import React,{useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Home from './pages'
import Login from './pages/login'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect (() => {
    if (localStorage.getItem("tokenflg") !== null) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      <header>
        <Navbar loggedIn={loggedIn} money={"100.00"} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home loggedIn={loggedIn}/>}/>
          <Route path='/login' element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </Router>
  )
}

export default App