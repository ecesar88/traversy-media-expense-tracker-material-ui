import { Divider, makeStyles, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import HistoryItem from "./HistoryItem";
import { GlobalContext } from './Context/GlobalContext'

type Item = {
  id: number,
  text: string,
  amount: number
};

const useStyles = makeStyles({
  container: {
    marginTop: "15px",
  },
});

const History: React.FC = () => {
  const classes = useStyles();
  const { transactions } = useContext(GlobalContext)

  return (
    <div className={classes.container}>
      <Typography variant="h6" component="h6" id="HistoryTop">
        History
      </Typography>
      <Divider />

      {transactions.map((item: Item) => {
        return (
          <HistoryItem
            key={`${item.id}`}
            id={item.id}
            text={item.text}
            amount={item.amount}
          />
        );
      })}
    </div>
  );
};

export default History;
