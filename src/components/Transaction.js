import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <div>
      <li className="minus">
        {transaction.text} <span>{transaction.amount}</span>
        <button className="delete-btn">X</button>
      </li>
    </div>
  );
};

export default Transaction;
