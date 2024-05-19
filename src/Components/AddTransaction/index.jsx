import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalProvider';

import './style.css'

const AddTransaction = () => {
  const { addNewTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

  }

  const submitButton = () => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    }

    addNewTransaction(newTransaction)
  }
  
  return (
    <div>
      <h3 className="title-add-transaction">Adicionar nova transação</h3>
      <form onSubmit={onSubmit} id="form">
        <div className="form-control">
          <label htmlFor="text">Texto</label>
          <input value={text} onChange={(e) => setText(e.target.value)} type="text" id="text" placeholder="Insira o texto..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Quantidade <br />
            (negativo - despesa, positivo - renda)
          </label>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" id="amount" placeholder="Insira o valor..." />
        </div>
        <button onClick={submitButton} className="btn-transaction">Adicionar transação</button>
      </form>
    </div>
  );
}

export default AddTransaction