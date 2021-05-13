import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link as LinkRouter } from "react-router-dom";
import Footer from "../Footer";
/* import Logo from "../../assets/logo/logo.jpeg"; */

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    minHeight: "100vh",
    position: "relative",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  divLeft: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    display: "flex",
    width: "100%",
    height: "50px",
    position: "absolute",
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#f5f5f5",
  },
}));

const AppFrame = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar className={classes.toolbar}>
          <div className={classes.divLeft}>
              {/* <img src={Logo} alt="logo" className={classes.img} />  */}      
            <div className={classes.menu}>
              <MenuItem
                component={LinkRouter}
                to="/ilustracion"
                color="inherit"
              >
                <Typography variant="body2">Ilustracion</Typography>
              </MenuItem>
              <MenuItem component={LinkRouter} to="/diseño" color="inherit">
                <Typography variant="body2">Diseño</Typography>
              </MenuItem>
              <MenuItem component={LinkRouter} to="/contacto" color="inherit">
                <Typography variant="body2">Contacto</Typography>
              </MenuItem>
            </div>
          </div>
          <div className={classes.divRight}>
            <MenuItem component={LinkRouter} to="/home" color="inherit">
              <Typography variant="h3">MAV</Typography>
            </MenuItem>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
      <Grid container>{children}</Grid>
      <div className={classes.offset}></div>
      <div className={classes.footer}>
        <Footer></Footer>
      </div>
    </div>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node,
};

export default AppFrame;
