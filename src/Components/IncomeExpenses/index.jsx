import React from 'react'
import './style.css'

const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container">
        <div>
            <h4 className="title-inc-exp">Renda</h4>
            <p id="money-plus" className="money plus">
              +$0.00
            </p>
        </div>
        <div>
            <h4 className="title-inc-exp">Despesas</h4>
            <p id="money-minus" className="money minus">
              -$0.00
            </p>
        </div>
    </div>
  )
}

export default IncomeExpenses;