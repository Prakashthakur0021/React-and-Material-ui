import React, { useState, useMemo } from "react";
import "./App.css";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core/styles";
import Header from "./components/Header";
import Content from "./components/Content";
import { UserContext } from "./Context/UserContext";
const useStyles = makeStyles({
  root: {},
});

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const providerValue = useMemo(
    () => ({
      darkMode,
      setDarkMode,
    }),
    [darkMode, setDarkMode]
  );

  return (
    <UserContext.Provider value={providerValue}>
      <Paper className={classes.root}>
        <Grid container>
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
      </Paper>
    </UserContext.Provider>
  );
}

export default App;
