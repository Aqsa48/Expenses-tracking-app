import React from 'react';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TransactionHistory } from './components/TransactionHistory'
import { AddTransaction } from './components/AddTransaction'
import './App.css'

// import global provider
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <h1> < Header /> </h1>
      <div className="container">
        <h1> < Balance /> </h1>
        <h1> < AccountSummary /> </h1>
        <h1> < TransactionHistory /> </h1>
        <h1> < AddTransaction /> </h1>
      </div>
    </GlobalProvider>
  );
}

export default App;
