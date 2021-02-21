import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    padding: "15px",
    fontWeight: "bold"
  },
});

const Header: React.FC<{ text: string }> = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography variant="h4" component="h4" className={classes.root}>
      {text}
    </Typography>
  );
};

export default Header;
