import React from 'react'
import '../TransactionList/style.css';

const index = ({ transaction, key }) => {
  const transactionSign = transaction.amount > 0 ? '+' : '-';


  return (
    <li key={key} className={transaction.amount > 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>{transactionSign}${Math.abs(transaction.amount)}</span>
      <button className="delete-btn">X</button>
    </li>
  )
}

export default index