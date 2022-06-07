import React from "react";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    display: "flex",
    alignItems: "center",
    borderColor: "white",
    padding: "10px 15px",
    '&:hover': {
      borderColor: "aqua ",
    },
  },
}));

const AuthBtn = ({children,text,...props}) => {
  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.btn}
        {...props}
      >
        {children}
        <Typography paragraph sx={{ margin: "0", color: "white" }}>
          {text}
        </Typography>
      </Button>
    </>
  );
};

export default AuthBtn;
