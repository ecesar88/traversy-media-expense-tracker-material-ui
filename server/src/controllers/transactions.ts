// @desc Get all transactions
// @route GET /api/v1/transactions
// @acess Public
export const getTransactions = (req: any, res: any, next: any): void => {
  res.send("GET Transactions");
};

// @desc Add transaction
// @route POST /api/v1/transactions
// @acess Public
export const addTransaction = (req: any, res: any, next: any): void => {
  res.send("POST Transactions");
};

// @desc Delete transactions
// @route DELETE /api/v1/transactions/:id
// @acess Public
export const deleteTransaction = (req: any, res: any, next: any): void => {
  res.send("DELETE Transactions");
};
