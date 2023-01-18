import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const[email,setEmail] = useState('');
  const[password,setpassword] = useState('');

  const signIn = e =>{
    // this will prevent form refreshing
    e.preventDefault();
  }

  const register = e =>{
    e.preventDefault();
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className="login_logo" src="https://cdn.pixabay.com/photo/2017/03/01/09/11/shop-2107911_960_720.png" alt="" />
      </Link>

      <div className='login_container'>
        <h1>Sign-in</h1>

        <form action="">

          <h5>E-mail</h5>

          <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>

          <input type="password" value={password} onChange={e =>setpassword(e.target.value)}/>

          <button type='submit' onClick ={signIn} className='login_signin_btn'>Sign In </button>

        </form>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, consequuntur voluptas, harum commodi nihil quisquam, at dolorum error id tempora adipisci!</p>

        <button type='submit' onClick = {register}className='register_btn'>Create Your Account</button>
      </div>

    </div>
  )
}

export default Login