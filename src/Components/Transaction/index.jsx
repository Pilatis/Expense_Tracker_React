import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalProvider';
import '../TransactionList/style.css';

const index = ({ transaction, key }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const transactionSign = transaction.amount > 0 ? '+' : '-';

  return (
    <li key={key} className={transaction.amount > 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>{transactionSign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
    </li>
  )
}

export default index