import React,{useState} from 'react';
import{useNavigate} from 'react-router-dom';
import '../Pages/css/Signup.css';
import signupimg from '../component/Assest/Signup image.png'
import logo from '../component/Assest/Logo.png';
import eyeOpen from '../component/Assest/icons/eye-regular.svg';
import eyeClosed from '../component/Assest/icons/eye-slash-regular.svg';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
      e.preventDefault();
      setError('');
  
      try {
        const response = await fetch('http://localhost:3002/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123'
          }),
        });
        console.log('Status:', response.status);
        const data = await response.json();
        console.log('Response:', data);
        if (response.ok) {
          navigate('/login'); // Redirect to login after successful signup
        } else {
          setError(data.error || 'Signup failed');
        }
      } catch (err) {
        setError('Failed to connect to the server');
      }
    };

    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                <form onSubmit={handleSignup} className="signup-form">
                    <h2 className="form-title">Create Your Account</h2>
                    {error && <div className="error-message">{error}</div>}
                    <div className="box">
                      <input 
                        className="field" 
                        type="text" 
                        id="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required/>
                      <label for="username">Username</label>
                    </div>
                    <div className="box">
                      <input 
                        className="field" 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                      <label for="email">Email</label>
                    </div>
                    <div className="password-container">
                        <div className = "box">
                          <input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              className="field"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
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