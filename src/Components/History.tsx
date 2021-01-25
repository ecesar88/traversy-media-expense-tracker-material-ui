import { Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import HistoryItem from "./HistoryItem";

type HistoryProps = {
  items: any[];
};

type Item = {
  name: string;
  amount: number;
};

const useStyles = makeStyles({
  container: {
    marginTop: "15px",
  },
});

const History: React.FC<HistoryProps> = ({ items }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h6" component="h6" id="HistoryTop">
        History
      </Typography>
      <Divider />

      {items.map((item: Item) => {
        return (
          <HistoryItem
            key={`${item.name}-${String(item.amount)}`}
            name={item.name}
            amount={item.amount}
          />
        );
      })}
    </div>
  );
};

export default History;
