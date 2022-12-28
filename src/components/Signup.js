import React, { useState } from 'react';
import '../style/Signup.css';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useHistory();

  const signUp = async (e) => {
      e.preventDefault();
      try {
          await createUserWithEmailAndPassword(auth, email, password)
          navigate.push('./login')
      } catch (err) {
          setError(err.message);
      }
      setEmail('');
      setPassword('');
  }

  return (
    <div className="signup">
      <div className="signup__container">
        <img src="https://user-images.githubusercontent.com/73184313/207704192-3bad1fd2-0399-4b5c-a90e-8d4d9ed9dab3.png"
          alt="social messgenger logo" />
        <div className="signup__text">
          <h2>Sign Up</h2>
        </div>
        <div className="signup__containerInputs">
          <div className="signup__error">
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
          <Button type="submit" onClick={signUp}>Sign Up</Button>
        </div>
        <div className="signup__containerSignup">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  )
};

export default Signup;