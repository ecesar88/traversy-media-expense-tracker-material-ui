import { Card, makeStyles } from "@material-ui/core";
import React, { useState, useContext } from "react";
import { GlobalContext } from "./Context/GlobalContext";

type HistoryItemProps = {
  id: number;
  text: string;
  amount: number;
};

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 29fr 10fr",
    gridGap: "10px",
    margin: "10px 0px",
  },
  amount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: "10px",
  },
  text: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "left",
    marginLeft: "10px",
  },
  deleteButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px 8px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "5px",
    textAlign: "center",
    margin: "10px 5px 10px 0px",
  },
});

const HistoryItem: React.FC<HistoryItemProps> = ({ id, text, amount }) => {
  const [deleteButtonState, setDeleteButtonState] = useState("hide");
  const { deleteTransaction } = useContext(GlobalContext);

  const classes = useStyles();
  const sign = amount < 0 ? "-" : "+";

  return (
    <div style={{ display: "flex" }}>
      {(function () {
        if (deleteButtonState === "show") {
          return (
            <div className={classes.deleteButton}>
              <div style={{ cursor: "pointer" }}>
                <button onClick={deleteTransaction!(id) as any}>X</button>
              </div>
            </div>
          );
        }
      })()}

      <Card
        className={classes.container}
        style={{
          borderRight: amount > 0 ? "5px solid green" : "5px solid red",
        }}
        onMouseOver={() => {
          setDeleteButtonState("show");
        }}
        onMouseOut={() => {
          setDeleteButtonState("hide");
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
        >
          <div>
            <p style={{ color: "#7a7a7a", fontSize: "0.8rem" }}>{id}</p>
          </div>
        </div>

        <div className={classes.text}>
          <p>
            <b>{text}</b>
          </p>
        </div>

        <div className={classes.amount}>
          <div>
            <span>{sign}</span>
          </div>
          <div>
            <p>
              {String(Math.abs(amount)).replace(
                /(\d{2,3})(\d{2})?/,
                "$ $1,$200"
              )}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HistoryItem;
