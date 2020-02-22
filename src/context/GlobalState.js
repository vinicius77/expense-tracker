import React, { createContext, useReducer } from "react";

const initialState = {
  transactions: [
    { id: 1, text: "Graphic", amount: 20 },
    { id: 2, text: "Computer", amount: -120 },
    { id: 3, text: "Car", amount: 400 },
    { id: 4, text: "Games", amount: -54 }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        )
      };
    case "CREATE_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /*** Creating Actions */
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function createTransaction(transaction) {
    dispatch({ type: "CREATE_TRANSACTION", payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        createTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
