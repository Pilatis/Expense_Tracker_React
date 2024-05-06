import { useState } from 'react'
import Header from './Components/Header'
import Balance from './Components/Balance'
import './css/App.css'
import IncomeExpenses from './Components/IncomeExpenses'

function App() {

  return (
    <main className="main-container">
      <Header />
      <div className="container-content">
        <Balance />
        <IncomeExpenses />
        </div>
    </main>
  )
}

export default App
