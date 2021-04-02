import { Divider, makeStyles, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../Context/GlobalContext";

type Item = {
  id: number;
  text: string;
  amount: number;
};

const useStyles = makeStyles({
  container: {
    marginTop: "15px",
  },
});

const History: React.FC = () => {
  const classes = useStyles();
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    if (getTransactions)
      getTransactions()
  }, [])

  return (
    <div className={classes.container}>
      <Typography variant="h6" component="h6" id="HistoryTop">
        History
      </Typography>
      <Divider />
      {Object.keys(transactions).length !== 0 ? (
        transactions.map((item: Item) => {
          return (
            <Transaction
              key={`${item.id}`}
              id={item.id}
              text={item.text}
              amount={item.amount}
            />
          );
        })
      ) : (
        <div style={{ padding: "25px 0px" }}>
          <Typography
            component="p"
            id="HistoryNoItems"
            color="textSecondary"
          >
            No transactions, add a new transaction below
          </Typography>
        </div>
      )}
    </div>
  );
};

export default History;
