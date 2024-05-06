import React from 'react'
import './style.css'

const TransactionList = () => {
  return (
    <div>
      <h3 className="title-transaction">History</h3>
      <ul id="list" className="list">
        {/* <li class="minus">
          Cash <span>-$400</span><button class="delete-btn">x</button>
        </li>  */}
      </ul>
    </div>
  );
}

export default TransactionList