import React, { useState } from 'react';
import '../style/Signup.css';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { actionTypes } from '../contexts/reducer';
import { useStateValue } from '../contexts/StateProvider';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [{}, dispatch] = useStateValue();
    const navigate = useHistory();

    const signUp = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log('signup result: ', result); // @TODO delete
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
            navigate.push('/'); // @TODO redirect navigation?
        }).catch((err) => {
            setError(err.message);
        })
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