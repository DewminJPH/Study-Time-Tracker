import React,{useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import '../Pages/css/Login.css';
import loginimg from '../component/Assest/Login image.png'
import logo from '../component/Assest/Logo.png';
import eyeOpen from '../component/Assest/icons/eye-regular.svg';
import eyeClosed from '../component/Assest/icons/eye-slash-regular.svg';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError('');
      
     try {
        const response = await fetch('http://localhost:3002/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
  
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Login failed');
        } 
         // Store token and user data
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
      
        // Redirect to dashboard
        navigate('/dashboard');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

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
                <form onSubmit={handleLogin} className="login-form">
                    <h2 className="form-title">LOGIN</h2>
                    {error && <div className="error-message">{error}</div>}
                    <div class="box">
                      <input 
                        class="field" 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        disabled={loading}
                      />
                      <label for="username">Username</label>
                    </div>
                    <div className="password-container">
                        <div className = "box">
                          <input
                              type={showPassword ? "text" : "password"} 
                              className="field"
                              id="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              disabled={loading}
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
                    <button type="submit" className="login-button" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
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