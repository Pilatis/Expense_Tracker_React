import React, { useState } from 'react'
import './style.css'

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h3 className="title-add-transaction">Adicionar nova transação</h3>
      <form id="form">
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
        <button className="btn-transaction">Adicionar transação</button>
      </form>
    </div>
  );
}

export default AddTransaction