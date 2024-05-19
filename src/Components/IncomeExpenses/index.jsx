import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalProvider';

import './style.css'

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)

  const transactionAmounts = transactions.map((transaction) => transaction.amount);

  const totalIncome  = transactionAmounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);

  const totalExpense = (
    transactionAmounts.filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
            <h4 className="title-inc-exp">Renda</h4>
            <p id="money-plus" className="money plus">
              {totalIncome}
            </p>
        </div>
        <div>
            <h4 className="title-inc-exp">Despesas</h4>
            <p id="money-minus" className="money minus">
              {totalExpense}
            </p>
        </div>
    </div>
  )
}

export default IncomeExpenses;