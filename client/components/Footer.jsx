import React from 'react';
import styles from "../styles/footer.module.css"
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  footer:{
    backgroundColor:theme.palette.primary.dark,
    height:"100px",
    position: "relative",
    bottom:"0",
    zIndex:"200000",
  }
}));


const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>

    </footer>
  );
};

export default Footer;