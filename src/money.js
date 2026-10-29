export const formatMoney = amount => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
export function summarize(transactions) {
  const income = transactions.reduce((sum, item) => sum + Math.max(0, Math.round(item.transactionAmount * 100)), 0);
  const expenses = transactions.reduce((sum, item) => sum + Math.max(0, -Math.round(item.transactionAmount * 100)), 0);
  return { income: income / 100, expenses: expenses / 100, balance: (income - expenses) / 100 };
}
