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
  addTransaction?: (transaction: transaction) => void;
};

const initialState: initialStateType = {
  transactions: [],
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

  function addTransaction(transaction: transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
