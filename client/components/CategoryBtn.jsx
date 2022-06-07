import React from "react";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    display: "flex",
    alignItems: "center",
    borderColor: "black",
    padding: "10px 15px",
    color: "black",
    "&:hover": {
      borderColor: "primary",
    },
    "&:not(:last-child)":{
      marginBottom:"15px"
    },

  },
  btnText: {
    margin: "0",
    color: "inherit",
    fontSize:"16px",
    fontWeight:500,
    textTransform:"none",
    fontFamily:"Montserrat",
  },
}));

const CategoryBtn = ({ children, text, ...props }) => {
  const classes = useStyles();

  return (
    <>
      <Button className={classes.btn} variant={"outlined"} {...props}>
        {children}
        <Typography className={classes.btnText} paragraph sx={{}}>
          {text}
        </Typography>
      </Button>
    </>
  );
};

export default CategoryBtn;
