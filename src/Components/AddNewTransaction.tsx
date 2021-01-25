import {
  Button,
  Divider,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {},
  input: {
    backgroundColor: "#ffffff",
    margin: "5px 0px",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "15px auto",
  },
});

const AddNewTransaction: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6" component="h6">
        Add a new transaction
      </Typography>
      <Divider />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.input}
          style={{ marginTop: "10px" }}
          id="itemName"
          variant="outlined"
          label="Text"
          placeholder="Enter Text"
          fullWidth
        />

        <TextField
          className={classes.input}
          id="itemAmount"
          variant="outlined"
          label="Amount"
          placeholder="Enter Amount"
          fullWidth
        />
        <small>(Negative = expense; Positive = income)</small>
      </form>

      <div className={classes.button}>
        <Button style={{ width: "100%" }} variant="contained" color="secondary">
          Add transaction
        </Button>
      </div>
    </div>
  );
};

export default AddNewTransaction;
