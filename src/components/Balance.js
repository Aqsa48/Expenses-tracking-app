import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { summarize, formatMoney } from '../money';
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  return <section aria-label="Current balance"><h2>Current balance</h2><p className="balance">{formatMoney(summarize(transactions).balance)}</p></section>;
};
