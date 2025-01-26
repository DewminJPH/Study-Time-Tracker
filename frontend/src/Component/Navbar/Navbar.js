import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const[menu,setMenu] = useState("home")
    const handleLoginClick = () => {
      setMenu(""); 
    }

  return (
    <>
      <div className="navbar">
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("home")}}><Link className={menu === "home" ? 'active' : ''} style={{textDecoration:'none'}}to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("about")}}><Link className={menu === "about" ? 'active' : ''} style={{textDecoration:'none'}}to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("features")}}><Link className={menu === "features" ? 'active' : ''} style={{textDecoration:'none'}}to='/features'>Features</Link>{menu==="features"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("works")}}><Link className={menu === "works" ? 'active' : ''} style={{textDecoration:'none'}}to='/howitworks'>How it works</Link>{menu==="works"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-buttons">
          <div className="nav-login">
            <Link to='/login'><button onClick={handleLoginClick}>Login</button></Link>
          </div>
          <div className="nav-signup">
            <Link to='/signup'><button onClick={handleLoginClick}>Sign Up</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
