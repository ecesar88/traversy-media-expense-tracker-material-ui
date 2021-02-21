import { Card, Divider, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

type IncomeExpenseProps = {
  income: number;
  expense: number;
};

const useStyles = makeStyles({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
    justifyContent: "center",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  value: {
    fontSize: "25px",
    fontWeight: "bold",
  },
});

const IncomeExpense: React.FC<IncomeExpenseProps> = () => {
  const classes = useStyles();
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction: any) => transaction.amount);

  const income = amounts
    .filter((item: any) => item > 0)
    .reduce((acc: any, item: any) => (acc += item), 0);

  const expense = amounts
    .filter((item: any) => item < 0)
    .reduce((acc: any, item: any) => (acc += item), 0 * -1);

  return (
    <Card variant="elevation">
      <div className={classes.flexContainer}>
        <div className={classes.innerContainer}>
          <div>INCOME</div>
          <div className={classes.value}>
            <p style={{ color: "green", margin: "auto", height: "auto" }}>
              {income
                ? String(income).replace(/(\d{3})(\d{2})?/, "$ $1,$200")
                : "$ 0,00"}
            </p>
          </div>
        </div>

        <Divider
          orientation="vertical"
          flexItem
          style={{ margin: "0px 15px" }}
        />

        <div className={classes.innerContainer}>
          <div>EXPENSE</div>
          <div className={classes.value}>
            <p style={{ color: "red", margin: "auto", height: "auto" }}>
              {expense
                ? String(expense).replace(/(\d{3})(\d{2})?/, "$ $1,$200")
                : "$ 0,00"}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default IncomeExpense;
