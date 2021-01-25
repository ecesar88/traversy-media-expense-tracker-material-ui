import React from "react";
import { Container, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import History from "./Components/History";
import "./App.css";
import IncomeExpense from "./Components/IncomeExpense";
import AddNewTransaction from "./Components/AddNewTransaction";

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
    <Container maxWidth="sm">
      <Grid
        container
        xs={12}
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
          <History
            items={[
              { name: "Pagamento Netflix", amount: 40 },
              { name: "Conta cartão de cŕedito", amount: 650 },
              { name: "Parcela do carro", amount: 900 },
            ]}
          />
          <AddNewTransaction />
        </Container>
      </Grid>
    </Container>
  );
};

export default App;
