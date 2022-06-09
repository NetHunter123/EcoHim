import React from "react";
import styles from "../styles/footer.module.css";
import { makeStyles } from "@material-ui/styles";
import Logo from "./Logo";
import { Box } from "@mui/material";
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
          <NavigationBtn
            variant={"text"}
            color={"primary"}
            sx={{ height: "50px" }}
            text={"Sign In"}
          >
            <AccountCircleIcon
              sx={{ display: "block", color: "white", marginRight: "5px" }}
            />
          </NavigationBtn>
        </NextLink>
        <p style={{ color: "white", fontSize: "24px" }}>|</p>
        <NextLink href="/auth/register" passHref>
          <NavigationBtn
            variant={"text"}
            color={"primary"}
            sx={{ height: "50px" }}
            text={"Sign Up"}
          >
            <AccountCircleIcon
              sx={{ display: "block", color: "white", marginRight: "5px" }}
            />
          </NavigationBtn>
        </NextLink>
      </Box>
    </footer>
  );
};

export default Footer;
