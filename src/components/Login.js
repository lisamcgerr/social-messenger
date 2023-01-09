import React, { useState } from 'react';
import '../style/Login.css';
import { Button } from '@material-ui/core';
import { auth, googleProvider } from './firebase';
import { browserSessionPersistence, setPersistence, signInWithPopup } from 'firebase/auth';
import { useStateValue } from '../contexts/StateProvider';
import { actionTypes } from '../contexts/reducer';
import { Link, useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [{}, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useHistory();

  const signIn = async (e) => {
    e.preventDefault();
    setPersistence(auth, browserSessionPersistence)
    await signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      dispatch({
          type: actionTypes.SET_USER,
          user: result.user
      });
      localStorage.setItem('user', JSON.stringify(result.user));
      console.log('Local Storage: ', JSON.parse(localStorage.getItem('user'))); // @TODO remove
      navigate.push('/');
    }).catch((err) => {
        setError(err.message);
    })
    setEmail('');
    setPassword('');
  }

  const signInWithGoogle = () => {
    setPersistence(auth, browserSessionPersistence)
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
      localStorage.setItem('user', JSON.stringify(result.user));
      console.log('Local Storage: ', JSON.parse(localStorage.getItem('user'))); // @TODO remove
      navigate.push('/');
    }).catch((error) => {
      alert(error.message);
    });
  }

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://user-images.githubusercontent.com/73184313/207704192-3bad1fd2-0399-4b5c-a90e-8d4d9ed9dab3.png"
          alt="social messgenger logo" />
        <div className="login__text">
          <h2>Login</h2>
        </div>
        <div className="login__containerInputs">
          <div className="login__error">
            <p>{error}</p>
          </div>
          <input
            type="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="Email Address" />
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder="Password" />
          <Button type="submit" onClick={signIn}>Log In</Button>
        </div>
        <Button type="submit" onClick={signInWithGoogle}>
          <img
            src="https://user-images.githubusercontent.com/73184313/207706566-5902ba79-0b01-4e98-8177-dab5a18c7725.png" 
            alt="Google G icon"
            className="login__googleLogo" />
          Sign in with Google
        </Button>
        <div className="login__containerSignup">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  )
};

export default Login;
