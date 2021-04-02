import { Request, Response, NextFunction } from "express";
import Transaction from "../models/Transaction";

interface TransactionRequest {
  (req: Request, res: Response, next?: NextFunction): Promise<unknown>;
}

interface TransactionType {
  id: string,
  text: string,
  amount: number,
  createdAt: Date,
  //eslint-disable-next-line
  remove: Function
}

/*
* @desc Get all transactions
* @route GET /api/v1/transactions
* @access Public
*/
export const getTransactions: TransactionRequest = async (req, res) => {
  try {
    // Get all the transactions
    const transactions = await Transaction.find();
    return res.status(200).json({
      sucess: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      error: error,
      message: "Could not create"
    });
  }
};

/*
* @desc Create a transaction
* @route POST /api/v1/transactions
* @access Public
*/
export const addTransaction: TransactionRequest = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
      sucess: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages =
        Object.values(err.errors)
          //eslint-disable-next-line
          .map((item: any) =>
            item.message)

      res.status(400).json({
        sucess: false,
        error: messages
      })
    } else {
      return res.status(500).json({
        sucess: false,
        error: err,
        message: "Could not create"
      });
    }
  }
};

/*
*  @desc Delete a transaction by id
*  @route DELETE /api/v1/transactions/:id
*  @access Public
*/
export const deleteTransaction: TransactionRequest = async (req, res) => {
  try {
    const transactionId = Transaction.findById(req.params.id)

    if (!transactionId) {
      return res.status(404).json({
        sucess: false,
        message: "No transaction found"
      })
    }

    await transactionId.remove()

    return res.status(200).json({
      sucess: true
    })

  } catch (error) {
    return res.status(500).json({
      error: error
    })
  }
};
