import React,{useState} from 'react';
import '../Pages/css/Signup.css';
import signupimg from '../component/Assest/Signup image.png'
import logo from '../component/Assest/Logo.png';
import eyeOpen from '../component/Assest/icons/eye-regular.svg';
import eyeClosed from '../component/Assest/icons/eye-slash-regular.svg';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };
    const handleSignup = (e) => {
      e.preventDefault();
      navigate('/login');
    };
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-left">
          <img src={signupimg} alt="signup illustration" className="signup-image" />
        </div>
        <div className="signup-right">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <div className="form-container">
                <form className="signup-form" onSubmit={handleSignup}>
                    <h2 className="form-title">Create Your Account</h2>
                    <div className="box">
                      <input className="field" type="text" id="username" required/>
                      <label for="username">Username</label>
                    </div>
                    <div className="box">
                      <input className="field" type="email" id="email" required/>
                      <label for="email">Email</label>
                    </div>
                    <div className="password-container">
                        <div className = "box">
                          <input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              className="field"
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
                    <button type="submit" className="signup-button">Signup</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;