import React,{useState} from 'react';
import '../Pages/css/Login.css'
const Login = () => {
    const[showPassword,setShowPassword]=useState(false);
    
    return (
        <div className='Login'>
            <form action='#' method='post' class='login-form'>
                <h1 class="title">Login</h1>
                <div class='Username box'>
                    <input class='field' type='text' id='Username' required/>
                    <label for='Username'>Username</label>
                </div>
                <div class='password box'>
                    <input class='field' type={showPassword?'text':'password'} id='password' required/>
                    <label for='password'>Password</label>
                </div>
                <div className={showPassword ?'show':'hide'}onClick={()=>setShowPassword(!showPassword)} title={showPassword ? 'Hide Password' : 'Show Password'}>
                </div>
                <button class='button' type='submit'>Login</button>
            </form>
        </div>
    )
};
export default Login;