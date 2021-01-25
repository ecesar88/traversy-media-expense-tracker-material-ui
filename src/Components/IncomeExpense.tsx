import { Card, Divider, makeStyles } from "@material-ui/core";
import React from "react";

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

const IncomeExpense: React.FC<IncomeExpenseProps> = ({ income, expense }) => {
  const classes = useStyles();

  return (
    <Card variant="elevation">
      <div className={classes.flexContainer}>
        <div className={classes.innerContainer}>
          <div>INCOME</div>
          <div className={classes.value}>
            <p style={{ color: "green", margin: "auto", height: "auto" }}>
              {String(income).replace(/(\d{3})(\d{2})?/, "$ $1,$200")}
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
              {String(expense).replace(/(\d{3})(\d{2})?/, "$ $1,$200")}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default IncomeExpense;
