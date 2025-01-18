import React from 'react';
import '../Pages/css/Login.css'
const Login = () => {
    return (
        <div className='Login'>
            <div className='Login-container'>
                <h4>Welcome back!</h4>
                <div className='Login-fields'>
                    <input type="text" placeholder='Username'/>
                    <input type="password" placeholder='Password'/>
                </div>
                <button>Login</button>
                <p className="redirtosignup">Don't have an accout yet: <span>sign up</span> here</p>
            </div>
        </div>
    )
};
export default Login;