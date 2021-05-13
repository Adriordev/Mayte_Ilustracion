import React, { useState, useEffect } from "react";
import AppFrame from "../components/AppFrame/AppFrame";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import GalleySubsection from "../components/GallerySubsection/GallerySubsection";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  img: {
    display: "block",
    width: "100%",
    objectFit: "contain",
    cursor: "pointer",
  },
  gallery: {
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  }
}));
const Subsectionpage = (props) => {
  const classes = useStyles();

  const [img, setImg] = useState("");
  const [imgTitle, setImgTitle] = useState("");

  const onClickHandler = (dataImg) => {
    setImg(dataImg.img);
    setImgTitle(dataImg.title);
  };
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  useEffect(() => {
    setTitle(props.category);
    setSubtitle(props.proyect);
  }, [props.category, props.proyect]);
  return (
    <AppFrame>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h2" color="inherit">
            {title} - {subtitle}
          </Typography>
        </Grid>
        <Grid container item spacing={2} className={classes.root}>
          <Grid item xs={12}>
            <Typography variant="h6" color="inherit" align="right">
              Haz 'click' sobre las miniaturas
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={6} className={classes.gallery}>
            <GalleySubsection
              onClick={onClickHandler}
              category={props.category}
              proyect={props.proyect}
            ></GalleySubsection>
          </Grid>
          <Grid item xs={12} md={8} lg={6} className={classes.image} >
            <img src={img} alt={imgTitle} className={classes.img}/>
          </Grid>
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default Subsectionpage;
