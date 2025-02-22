import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../Pages/css/Login.css';
import loginimg from '../component/Assest/Login image.png'
import logo from '../component/Assest/Logo.png';
import eyeOpen from '../component/Assest/icons/eye-regular.svg';
import eyeClosed from '../component/Assest/icons/eye-slash-regular.svg';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const BtnClick = async () => {
      window.location.href='/dashboard';
    }

    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <img src={loginimg} alt="Login illustration" className="login-image" />
        </div>
        <div className="login-right">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <div className="welcome-container">
                <h4 className="welcome-text">Welcome Back!</h4>
            </div>
            <div className="form-container">
                <form action="#" method="post" className="login-form">
                    <h2 className="form-title">LOGIN</h2>
                    <div class="box">
                      <input class="field" type="text" id="username" required/>
                      <label for="username">Username</label>
                    </div>
                    <div className="password-container">
                        <div className = "box">
                          <input
                              type={showPassword ? "text" : "password"} 
                              className="field"
                              id="password"
                              required
                          />
                          <label for="password">Password</label>
                        </div>
                        <img
                          src={showPassword ? eyeOpen : eyeClosed}
                          alt={showPassword ? "Hide password" : "Show password"}
                          className="toggle-password-icon"
                          onClick={togglePasswordVisibility}
                        />
                    </div>
                    <button type="submit" className="login-button" onClick={BtnClick} >Login</button>
                    <div className="signup-text">Don't you have an account? <Link to="/signup" className="signup-link">Sign up</Link> here
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;