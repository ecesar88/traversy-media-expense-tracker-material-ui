import {
  Button,
  Divider,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  input: {
    backgroundColor: "#ffffff",
    margin: "5px 0px",
    width: "100%",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "15px auto",
  },
});

const AddNewTransaction: React.FC = () => {
  const transactions = useContext(GlobalContext);
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [id, setId] = useState<number>(0);

  const classes = useStyles();

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    setId((prev) => prev + 1)

    const newTransaction = {
      id: id,
      text,
      amount,
    };

    transactions?.addTransaction?.(newTransaction);
  };

  return (
    <div>
      <Typography variant="h6" component="h6">
        Add a new transaction
      </Typography>
      <Divider />
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          className={classes.input}
          style={{ marginTop: "10px" }}
          id="itemName"
          variant="outlined"
          label="Text"
          placeholder="Enter Text"
          fullWidth
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            setText(evt.target.value);
          }}
        />

        <TextField
          className={classes.input}
          id="itemAmount"
          variant="outlined"
          label="Amount"
          placeholder="Enter Amount"
          fullWidth
          value={amount}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            setAmount(Number(evt.target.value));
          }}
        />
        <small>(Positive = income; Negative = expense)</small>
      </form>

      <div className={classes.button}>
        <Button
          style={{ width: "100%" }}
          variant="contained"
          color="secondary"
          type="submit"
          onClick={onSubmit}
        >
          Add transaction
        </Button>
      </div>
    </div>
  );
};

export default AddNewTransaction;
