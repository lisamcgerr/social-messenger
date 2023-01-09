import React from 'react';
import '../style/Logout.css';
import { useStateValue } from '../contexts/StateProvider';
import { Button } from '@material-ui/core';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { actionTypes } from '../contexts/reducer';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const [{}, dispatch ] = useStateValue();
    const navigate = useHistory();

    const logout = () => {
        signOut(auth)
        .then(() => {
            dispatch({
                type: actionTypes.SET_USER,
                user: null
            });
            localStorage.clear();
            navigate.push('/login');
        }).catch((err) => {
            alert(err.message);
        })
    }

    return (
        <div className="logout">
            <Button className="logout__button" onClick={logout}>Log Out</Button>
        </div>
    )
};

export default Logout;