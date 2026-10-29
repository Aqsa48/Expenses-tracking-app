import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const submit = event => {
    event.preventDefault();
    const value = Number(amount);
    const cents = Math.round(value * 100);
    if (!description.trim() || !Number.isFinite(value) || !Number.isSafeInteger(cents) || cents === 0) {
      setError('Enter a description and a non-zero amount with up to two decimal places.');
      return;
    }
    addTransaction({ id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      description: description.trim(), transactionAmount: cents / 100 });
    setDescription('');
    setAmount('');
    setError('');
  };
  return <section aria-labelledby="add-title">
    <h3 id="add-title">Add new transaction</h3>
    <form onSubmit={submit}>
      <label htmlFor="description">Description</label>
      <input id="description" type="text" value={description} maxLength={120}
        onChange={event => setDescription(event.target.value)} placeholder="For example, groceries" required />
      <label htmlFor="transactionamount">Amount (USD)</label>
      <p id="amount-help">Use a positive amount for income and a negative amount for expenses.</p>
      <input id="transactionamount" type="number" step="0.01" value={amount}
        aria-describedby="amount-help" onChange={event => setAmount(event.target.value)} placeholder="For example, -25.50" required />
      {error && <p role="alert">{error}</p>}
      <button className="btn" type="submit">Add transaction</button>
    </form>
  </section>;
};
