import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: "inherit",
    objectFit: "cover",
  },
}));

function SingleImg({ img, title }) {
  const classes = useStyle();

  return <img src={img} alt={title} className={classes.img} />;
}

export default SingleImg;
