import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";
import Content from "./components/Content";

const useStyles = makeStyles({
  root: {},
});

function App() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid container>
        <Grid item sm={2} xs={false} />
        <Grid item sm={8} xs={12}>
          <Content />
        </Grid>
        <Grid item sm={2} xs={false} />
      </Grid>
    </Grid>
  );
}

export default App;
