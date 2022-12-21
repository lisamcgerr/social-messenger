import React from 'react';
import '../style/Home.css';
import { useStateValue } from '../contexts/StateProvider';
import { Button } from '@material-ui/core';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { actionTypes } from '../contexts/reducer';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const [{ user }, dispatch ] = useStateValue();
    const navigate = useHistory();

    const logout = () => {
        signOut(auth)
        .then(() => {
            dispatch({
                type: actionTypes.SET_USER,
                user: null
            });
            navigate.push('./login');
        }).catch((err) => {
            alert(err.message);
        })
    }

    return (
        <div className="home">
            <h1>Welcome {user?.email}</h1>
            <Button className="home__logoutButton" onClick={logout}>Log out</Button>
        </div>
    )
};

export default Home;