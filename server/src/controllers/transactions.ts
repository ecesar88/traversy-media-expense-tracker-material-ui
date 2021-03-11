import { Request, Response, NextFunction } from "express";
import Transaction from "../models/Transaction";

interface Transaction {
  (req: Request, res: Response, next?: NextFunction): Promise<unknown>;
}

// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
export const getTransactions: Transaction = async (req, res) => {
  try {
    // Get all the transactions
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Add transaction
// @route POST /api/v1/transactions
// @access Public
export const addTransaction: Transaction = async (req, res) => {
  res.send("POST Transaction");
};

// @desc Delete transactions
// @route DELETE /api/v1/transactions/:id
// @access Public
export const deleteTransaction: Transaction = async (req, res) => {
  res.send("DELETE Transaction");
};
