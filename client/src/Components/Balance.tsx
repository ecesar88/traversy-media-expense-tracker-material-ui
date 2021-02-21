import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { GlobalContext } from "../Context/GlobalContext";

type BalanceProps = {
  amount: number;
};

const useStyles = makeStyles({
  balance: {
    margin: "10px",
  },
  card: {
    width: "100%",
    height: "auto",
    margin: "10px 0px",
  },
});

const Balance: React.FC<BalanceProps> = () => {
  const classes = useStyles();

  const { transactions } = useContext(GlobalContext);

  // Get all the amounts from all the transactions
  const amounts = transactions.map((transaction) => transaction.amount);

  // Get the balance, adding the prev amount with the current amount
  const balance = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className={classes.balance}>
        <p>YOUR BALANCE</p>
      </div>

      <div style={{ color: "#000000" }} className={classes.balance}>
        <Typography variant="h4" component="h4">
          <b>
            {balance
              ? String(balance).replace(/(\d{3})(\d{2})?/, "$ $1,$200")
              : "$ 0,00"}
          </b>
        </Typography>
      </div>
    </div>
  );
};

export default Balance;
