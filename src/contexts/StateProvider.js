import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../components/firebase';


// @TODO remove
// this is the data layer
export const StateContext = createContext();

// @TODO remove
// build a provider
// children is referring to App.js in index.js
export const StateProvider = ({ reducer, initialState, children }) => {
    const [ user, setUser ] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('currentUser: ', currentUser); // @TODO delete
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

// @TODO remove
// pulling from the data layer - used inside of a component
export const useStateValue = () => useContext(StateContext);