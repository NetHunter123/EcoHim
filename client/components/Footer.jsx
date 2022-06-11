import React from "react";
import styles from "../styles/footer.module.css";
import { makeStyles } from "@material-ui/styles";
import Logo from "./Logo";
import {Box, Button, Typography} from "@mui/material";
import NavigationBtn from "./NavigationBtn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NextLink from "next/link";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.dark,
    minHeight: "100px",
    padding: "20px",
    position: "relative",
    bottom: "0",
    zIndex: "1200",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    border:"1px solid ",
    borderColor: "white",
    padding: "10px 15px",
    '&:hover': {
      borderColor: "aqua ",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box style={{ margin: "0px auto 15px" }}>
        <Logo />
      </Box>
      <Box style={{ display: "flex", height: "60px", alignItems: "center" }}>
        <NextLink href="/auth/login" passHref>
          <Button
            className={classes.btn}
            variant={"text"}
            color={"primary"}
            sx={{ height: "50px" }}
            style={{border:"0px"}}
          >
            <AccountCircleIcon
              sx={{ display: "block", color: "white", marginRight: "5px" }}
            />
            <Typography paragraph sx={{ margin: "0", color: "white" }}>
              Sign IN
            </Typography>
          </Button>
        </NextLink>
        <p style={{ color: "white", fontSize: "24px" }}>|</p>
        <NextLink href="/auth/register" passHref>
          <Button
            className={classes.btn}
            variant={"text"}
            color={"primary"}
            sx={{ height: "50px" }}
            style={{border:"0px"}}
          >
            <AccountCircleIcon
              sx={{ display: "block", color: "white", marginRight: "5px" }}
            />
            <Typography paragraph sx={{ margin: "0", color: "white" }}>
              Sign Up
            </Typography>
          </Button>
        </NextLink>
      </Box>
    </footer>
  );
};

export default Footer;
