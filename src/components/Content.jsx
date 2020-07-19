import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CoffeeCard from "./CoffeeCard";
import data from "../data/amazonData";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
  },
});
const CoffeeGenerator = (dataObj) => {
  const clicked = true;
  return (
    <Grid key={dataObj.serial} item sm={6} md={4} xs={12}>
      <CoffeeCard {...dataObj} clicked={clicked} />
    </Grid>
  );
};
const Content = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.root}>
      {data.map((dataObj) => CoffeeGenerator(dataObj))}
    </Grid>
  );
};

export default Content;
