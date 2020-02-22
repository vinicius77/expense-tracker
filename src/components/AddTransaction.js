import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("Text");
  const [amount, setAmount] = useState(0);

  const onChangeTextHandler = event => {
    event.preventDefault();
    setText(event.target.value);
  };

  const onChangeAmountHandler = event => {
    event.preventDefault();
    setAmount(event.target.value);
  };

  return (
    <React.Fragment>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={event => onChangeTextHandler(event)}
            placeholder="Enter Text ..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={event => onChangeAmountHandler(event)}
            placeholder="Enter Amount ..."
          />
        </div>
        <button className="btn btn-dark">Add Transaction</button>
      </form>
    </React.Fragment>
  );
};

export default AddTransaction;
