import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

type transaction = {
  id: number;
  text: string;
  amount: number;
};

type initialStateType = {
  transactions: transaction[];
  deleteTransaction?: (id: number) => void;
};

const initialState: initialStateType = {
  transactions: [
    { id: 0, text: "Flower", amount: -20 },
    { id: 1, text: "Salary", amount: 300 },
    { id: 2, text: "Book", amount: -15 },
    { id: 3, text: "Camera", amount: -120 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
