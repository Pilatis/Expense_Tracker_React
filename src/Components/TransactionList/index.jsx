import React, { useContext } from 'react';
import Transaction from '../Transaction/index';

import { GlobalContext } from '../../Context/GlobalProvider';

import './style.css'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3 className="title-transaction">Histórico</h3>
      <ul id="list" className="list">
        {transactions.map((transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        )))}
      </ul>
    </div>
  );
}

export default TransactionList