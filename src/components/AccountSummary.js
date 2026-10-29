import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { summarize, formatMoney } from '../money';
export const AccountSummary = () => {
  const { transactions } = useContext(GlobalContext);
  const totals = summarize(transactions);
  return <section className="inc-exp-container" aria-label="Account summary">
    <div><h2>Income</h2><p className="money plus">{formatMoney(totals.income)}</p></div>
    <div><h2>Expenses</h2><p className="money minus">{formatMoney(totals.expenses)}</p></div>
  </section>;
};
