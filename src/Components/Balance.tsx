import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";

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

const Balance: React.FC<BalanceProps> = ({ amount }) => {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className={classes.balance}>
        <p>YOUR BALANCE</p>
      </div>

      <div style={{ color: "#000000" }} className={classes.balance}>
        <Typography variant="h4" component="h4">
          <b>{String(amount).replace(/(\d{3})(\d{2})?/, "$ $1,$200")}</b>
        </Typography>
      </div>
    </div>
  );
};

export default Balance;
