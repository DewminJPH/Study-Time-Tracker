import React,{useState} from 'react';
import '../Pages/css/Signup.css';
import signupimg from '../component/Assest/Signup image.png'
import logo from '../component/Assest/Logo.png';
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
                    <h2 className="form-title">Create Your Accout</h2>
                    <input type="text" placeholder="Username" className="input-field" required/>
                    <input type="email" placeholder="Email" className="input-field" required/>
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input-field"
                            required
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
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