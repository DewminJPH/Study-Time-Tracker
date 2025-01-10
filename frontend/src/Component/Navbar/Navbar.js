import React from 'react'
import './Navbar.css'
import logo from '../Assest/Logo.jpg'

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="nav-menu">
          <li>Home <hr/></li>
          <li>About</li>
          <li>Features</li>
          <li>How it works</li>
        </ul>
        <div className="nav-buttons">
          <div className="nav-login">
            <button>Login</button>
          </div>
          <div className="nav-signup">
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
    </>
  );
}
