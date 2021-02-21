import React from "react";
import { Container, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import TransactionList from "./Components/TransactionList";
import IncomeExpense from "./Components/IncomeExpense";
import AddNewTransaction from "./Components/AddNewTransaction";
import { GlobalProvider } from "./Context/GlobalContext";
import "./App.css";

const useStyles = makeStyles({
  gridContainer: {
    padding: "2rem",
  },
  container: {
    height: "calc(100% - 15px)",
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <GlobalProvider>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={3}
          alignItems="center"
          justify="center"
          className={classes.gridContainer}
        >
          <Container className={classes.container}>
            <Header text="Expense Tracker" />
            <Divider />
            <Balance amount={300} />
            <IncomeExpense income={200} expense={500} />
            <TransactionList />
            <AddNewTransaction />
          </Container>
        </Grid>
      </Container>
    </GlobalProvider>
  );
};

export default App;
