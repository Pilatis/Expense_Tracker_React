import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import { GlobalContext } from '../../Context/GlobalProvider';
import '../TransactionList/style.css';

const Transaction = ({ transaction}) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const transactionSign = transaction.amount > 0 ? '+' : '-';

  return (
    <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.text}
      <span>{transactionSign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
    </li>
  )
}

// definitions
Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired
}

export default Transaction;
