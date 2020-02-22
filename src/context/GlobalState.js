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
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
