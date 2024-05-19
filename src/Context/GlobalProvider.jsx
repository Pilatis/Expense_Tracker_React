import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Providr component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id) => {
       dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
       })
    }

    const addNewTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    
    return (
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addNewTransaction
    }}>
       {children}
    </GlobalContext.Provider>
  );
};