import React from "react";
import { Typography } from "@material-ui/core";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles({
  root: {},
  cart: {
    flexGrow: 1,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.cart} variant="h6">
          Amazon Cart
        </Typography>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <AddShoppingCartIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
