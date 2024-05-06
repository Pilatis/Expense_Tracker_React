import { useState } from 'react'
import Header from './Components/Header'
import Balance from './Components/Balance'
import './css/App.css'
import IncomeExpenses from './Components/IncomeExpenses'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'

function App() {

  return (
    <main className="main-container">
      <Header />
      <div className="container-content">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        </div>
    </main>
  )
}

export default App
