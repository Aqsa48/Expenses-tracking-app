import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Create the initial State

const initialState = {
    transactions: [
        { id: 1, description: 'Income 1', transactionAmount: 1000 },
        { id: 2, description: 'Expense 1', transactionAmount: -100 },
        { id: 3, description: 'Income 2', transactionAmount: 2000 },
        { id: 4, description: 'Expense 1', transactionAmount: -400 },

    ]
}

// creating golable context

export const GlobalContext = createContext(initialState)


// creating provider for globale context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }}>
            {children}
        </GlobalContext.Provider >
    )
}
