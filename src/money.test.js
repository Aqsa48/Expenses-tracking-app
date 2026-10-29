import { summarize } from './money';
test('sums decimal amounts in cents', () => {
  expect(summarize([{transactionAmount: 0.1}, {transactionAmount: 0.2}, {transactionAmount: -0.1}]))
    .toEqual({income: 0.3, expenses: 0.1, balance: 0.2});
});
