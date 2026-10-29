# Expense tracker

A small React app by Aqsa Umar for tracking income and expenses in USD.

## Live demo

[Try the expense tracker](https://aqsa48.github.io/Expenses-tracking-app/)

No account is required. Transactions are saved only in your browser.

## Features

- Add income and expenses with a description and amount.
- See your balance, total income, and total expenses update immediately.
- Remove transactions from the history.
- Keep transactions across page reloads using browser local storage.
- Use the app on mobile or with a keyboard.

Positive amounts represent income. Negative amounts represent expenses. For example, add `1000` for income and `-25.50` for groceries.

## Run locally

```sh
npm ci
npm start
```

Open http://localhost:3000. This project currently uses React 16 and Create React App 3.4.1. Its older build tooling may require a compatible Node environment; newer Node versions can need `NODE_OPTIONS=--openssl-legacy-provider` for Webpack 4.

## Validate

```sh
npm test -- --watchAll=false --runInBand
npm run build
```

Tests cover adding and deleting transactions, totals, decimal arithmetic, persistence, invalid input, and malformed saved data.

## Storage and privacy

Transactions stay in local storage in the browser and origin where you enter them. There is no account, server, cross-device sync, or backup. Clearing browser site data removes the saved transactions. If browser storage is blocked, the app shows a message and works for the current session.

This is a learning and portfolio project. It uses USD with two decimal places and is intended for simple personal tracking.

## Project structure

- `src/components`: form, history, balance, and summary.
- `src/context`: transaction state and browser persistence.
- `src/money.js`: currency formatting and totals calculated in cents.

## Contributing

Issues with clear reproduction steps and focused pull requests are welcome. Run the tests and production build before proposing changes. Never commit personal financial data or credentials.
