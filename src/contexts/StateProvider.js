import React, { createContext, useContext, useReducer } from 'react';

// @TODO remove
// this is the data layer
export const StateContext = createContext();

// @TODO remove
// build a provider
// children is referring to App.js in index.js
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
)

// @TODO remove
// pulling from the data layer - used inside of a component
export const useStateValue = () => useContext(StateContext);