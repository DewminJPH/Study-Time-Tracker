import React,{useState} from 'react'
import './Navbar.css'
import logo from '../Assest/Logo.jpg'

export const Navbar = () => {
    const[menu,setMenu] = useState("home")
  return (
    <>
      <div className="navbar">
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("about")}}>About{menu==="about"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("features")}}>Features{menu==="features"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("works")}}>How it works{menu==="works"?<hr/>:<></>}</li>
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
