import React from "react";
import { Container, Grid, Button, Card, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Components/Header";

const useStyles = makeStyles({
  gridContainer: {
    padding: "2rem",
    width: "100%",
    height: "100%",
    backgroundColor: '#d3d3d3'
  },
  paper: {
    width: "100%",
    height: "500px",
  },
  card: {
    width: "150px",
    height: "250px",
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
        <Paper className={classes.paper}>
          <Container>
            <Header text="teste" />
          </Container>
          <Card variant="outlined" className={classes.card}>
            <div style={{ height: "300px" }}></div>
          </Card>
        </Paper>
      </Grid>
    </Container>
  );
};

export default App;
