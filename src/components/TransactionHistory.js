import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { formatMoney } from '../money';
export const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  return <section aria-labelledby="history-title">
    <h3 id="history-title">Transaction history</h3>
    {transactions.length === 0 ? <p>No transactions yet. Add your first income or expense below.</p> :
      <ul className="list">{transactions.map(item => <li key={item.id} className={item.transactionAmount > 0 ? 'plus' : 'minus'}>
        <span>{item.description}</span><span>{formatMoney(item.transactionAmount)}</span>
        <button type="button" className="delete-btn" aria-label={`Delete ${item.description}`} onClick={() => deleteTransaction(item.id)}>Delete</button>
      </li>)}</ul>}
  </section>;
};
