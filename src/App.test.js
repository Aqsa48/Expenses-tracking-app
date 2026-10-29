import React from 'react';
import { render, fireEvent, cleanup, within } from '@testing-library/react';
import App from './App';
import { STORAGE_KEY } from './context/GlobalState';

beforeEach(() => localStorage.clear());
afterEach(cleanup);
function add(view, description, amount) {
  fireEvent.change(view.getByLabelText('Description'), { target: { value: description } });
  fireEvent.change(view.getByLabelText('Amount (USD)'), { target: { value: amount } });
  fireEvent.click(view.getByText('Add transaction'));
}
test('adds income and expenses, calculates totals, and deletes transactions', () => {
  const view = render(<App />);
  expect(view.getByText(/No transactions yet/)).toBeInTheDocument();
  add(view, 'Salary', '1000');
  add(view, 'Groceries', '-25.50');
  expect(within(view.getByLabelText('Current balance')).getByText('$974.50')).toBeInTheDocument();
  const summary = within(view.getByLabelText('Account summary'));
  expect(summary.getByText('$1,000.00')).toBeInTheDocument();
  expect(summary.getByText('$25.50')).toBeInTheDocument();
  fireEvent.click(view.getByLabelText('Delete Groceries'));
  expect(view.queryByText('Groceries')).not.toBeInTheDocument();
  expect(within(view.getByLabelText('Current balance')).getByText('$1,000.00')).toBeInTheDocument();
});
test('persists transactions across remounts', () => {
  const first = render(<App />);
  add(first, 'Freelance work', '125.10');
  first.unmount();
  const second = render(<App />);
  expect(second.getByText('Freelance work')).toBeInTheDocument();
  expect(within(second.getByLabelText('Current balance')).getByText('$125.10')).toBeInTheDocument();
});
test('rejects whitespace descriptions and zero amounts', () => {
  const view = render(<App />);
  add(view, '   ', '15');
  expect(view.getByRole('alert')).toBeInTheDocument();
  add(view, 'Invalid', '0');
  expect(view.queryByLabelText('Delete Invalid')).not.toBeInTheDocument();
});
test('recovers from malformed saved data', () => {
  localStorage.setItem(STORAGE_KEY, '{broken');
  const view = render(<App />);
  expect(view.getByText(/No transactions yet/)).toBeInTheDocument();
  add(view, 'Recovered', '1');
  expect(view.getByText('Recovered')).toBeInTheDocument();
});
test('ignores invalid stored transaction records', () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([null, { id: 'bad', description: 'Bad', transactionAmount: '20' }]));
  const view = render(<App />);
  expect(view.getByText(/No transactions yet/)).toBeInTheDocument();
});
