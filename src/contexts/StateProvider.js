import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../components/firebase';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
    const [ user, setUser ] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, [])

    return (
        <StateContext.Provider value={useReducer(reducer, initialState)} >
            {children}
        </StateContext.Provider>
)}

export const useStateValue = () => useContext(StateContext);