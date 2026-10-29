import React, { createContext, useEffect, useReducer, useState } from 'react';
import AppReducer from './AppReducer';
export const STORAGE_KEY = 'aqsa-expense-tracker-transactions';
export const GlobalContext = createContext({ transactions: [] });
function loadTransactions() {
  try {
    const items = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return { transactions: Array.isArray(items) ? items.filter(item =>
      item && typeof item.id === 'string' && typeof item.description === 'string' &&
      Number.isFinite(item.transactionAmount) && item.transactionAmount !== 0
    ) : [] };
  } catch {
    return { transactions: [] };
  }
}
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, undefined, loadTransactions);
  const [storageError, setStorageError] = useState(false);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.transactions));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }, [state.transactions]);
  return <GlobalContext.Provider value={{
    transactions: state.transactions,
    addTransaction: transaction => dispatch({ type: 'ADD_TRANSACTION', payload: transaction }),
    deleteTransaction: id => dispatch({ type: 'DELETE_TRANSACTION', payload: id })
  }}>
    {storageError && <p role="status">Browser storage is unavailable. Changes will last for this session only.</p>}
    {children}
  </GlobalContext.Provider>;
};
