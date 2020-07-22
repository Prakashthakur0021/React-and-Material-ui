import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Switch from "@material-ui/core/Switch";
import { UserContext } from "./../Context/UserContext";

const useStyles = makeStyles({
  root: {},
  cart: {
    flexGrow: 1,
  },
});

const Header = () => {
  const classes = useStyles();
  const { darkMode, setDarkMode } = useContext(UserContext);
  const changeTheme = () => setDarkMode(!darkMode);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.cart} variant="h6">
          Amazon Cart
        </Typography>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <AddShoppingCartIcon fontSize="large" />
        </IconButton>
        <Switch
          checked={darkMode}
          onChange={changeTheme}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
