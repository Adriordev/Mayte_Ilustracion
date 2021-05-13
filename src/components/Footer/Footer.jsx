import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <div>
      <Typography variant="body2" color="inherit">
        Made by Adriordev
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
