import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalProvider';

import './style.css';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const transactionAmounts = transactions.map((transaction) => transaction.amount);
  const transactionTotal = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="container-balance">
        <h4 className='title-balance'>Seu balanço</h4>
        <h1 id="number-balance">${transactionTotal}</h1>
    </div>
  )
}

export default Balance;