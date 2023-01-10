import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
    const [ user, setUser ] = useState({});

    return (
        <StateContext.Provider value={useReducer(reducer, initialState)} >
            {children}
        </StateContext.Provider>
)}

export const useStateValue = () => useContext(StateContext);