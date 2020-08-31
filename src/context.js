import React, { createContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';

const StateContext = createContext();

const StateProvider = ({ children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

export { StateContext, StateProvider };