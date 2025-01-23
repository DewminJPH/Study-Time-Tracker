import React,{useState} from 'react';
import '../Pages/css/Login.css';
import loginimg from '../component/Assest/Login image.png'
import logo from '../component/Assest/Logo.png';
import {Link} from 'react-router-dom'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

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
                <form className="login-form">
                    <h2 className="form-title">LOGIN</h2>
                    <input type="text" placeholder="Username" className="input-field" />
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input-field"
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <button type="submit" className="login-button">Login</button>
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