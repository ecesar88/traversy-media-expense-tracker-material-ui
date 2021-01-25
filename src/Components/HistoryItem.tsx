import { Card, makeStyles } from "@material-ui/core";
import React from "react";

type HistoryItemProps = {
  name: string;
  amount: number;
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0px",
    padding: "0px 10px",
  },
});

const HistoryItem: React.FC<HistoryItemProps> = ({ name, amount }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.container}>
        <div>
          <p><b>{name}</b></p>
        </div>

        <div>
          <p>{String(amount).replace(/(\d{2,3})(\d{2})?/, "$ $1,$200")}</p>
        </div>
      </Card>
    </div>
  );
};

export default HistoryItem;
