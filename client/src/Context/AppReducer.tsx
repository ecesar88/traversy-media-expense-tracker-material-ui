import { CardActions } from "@material-ui/core";

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        loading: false,
        transactions: action.payload
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: any) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      console.log(action.payload, state.transactions);
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default AppReducer;
