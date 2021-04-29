import React, {
  createContext,
  useReducer,
  ReactNode,
  ReactElement,
} from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

type Transaction = {
  id: number;
  text: string;
  amount: number;
};

type initialStateType = {
  transactions: Transaction[];
  error?: unknown;
  loading?: boolean;
  deleteTransaction?: (id: number) => void;
  addTransaction?: (transaction: Transaction) => void;
  getTransactions?: () => void;
};

const initialState: initialStateType = {
  transactions: [],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const response = await axios.get("/api/v1/transactions");

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction: Transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
