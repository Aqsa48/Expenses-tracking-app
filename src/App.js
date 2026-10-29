import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';
function App() {
  return <main className="container"><GlobalProvider>
    <Header /><Balance /><AccountSummary /><TransactionHistory /><AddTransaction />
    <p className="privacy-note">Saved in this browser. No account required.</p>
  </GlobalProvider></main>;
}
export default App;
