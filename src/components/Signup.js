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
        <h2>Sign Up</h2>
        <div className="signup__error">
            <p>{error}</p>
        </div>
        <form>
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
            <Button onClick={signUp} type="submit">Sign Up</Button>
        </form>
        <div className="signup__button">
            Already have an account? <Link to="/login">Login</Link>
        </div>
    </div>
  )
}

export default Signup;