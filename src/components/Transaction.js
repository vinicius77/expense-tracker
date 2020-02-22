import React from "react";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)} {/*Abslute Number*/}
        </span>
        <button className="delete-btn">X</button>
      </li>
    </div>
  );
};

export default Transaction;
