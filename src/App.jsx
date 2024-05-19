import { useState } from 'react';

import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';

import { GlobalProvider } from './Context/GlobalProvider';

import './css/App.css';

function App() {

  return (
    <GlobalProvider>
    <main className="main-container">
      <Header />
      <div className="container-content">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        </div>
    </main>
    </GlobalProvider>
  )
}

export default App
