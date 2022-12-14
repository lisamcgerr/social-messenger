import React from 'react';
import '../style/Login.css';
import { Button } from '@material-ui/core';

const Login = () => {
  const signIn = () => {
    
  }

  return (
    <div>
      <div className="login__container">
        <img src="https://user-images.githubusercontent.com/73184313/207704192-3bad1fd2-0399-4b5c-a90e-8d4d9ed9dab3.png"
          alt="social messgenger logo" />
        <div className="login__text">
          <h1>Sign In to Social Messenger</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          <img 
            src="https://user-images.githubusercontent.com/73184313/207706566-5902ba79-0b01-4e98-8177-dab5a18c7725.png" 
            alt="Google G icon"
            className="login__googleLogo" />
          Sign in with Google
        </Button>
      </div>
    </div>
  )
};

export default Login;
