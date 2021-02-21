const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;
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
        transactions: [action.payload, ...state.transactions],
      };
  }
};

export default AppReducer;
