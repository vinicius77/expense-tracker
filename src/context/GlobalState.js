import React, { createContext, useReducer } from "react";

const initialState = {
  transactions: []
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
      return initialState;
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
