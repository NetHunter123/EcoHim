import React from 'react';
import {Button} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({


}))

const RegisterBtn = () => {

  return (
    <>
      <Button
        variant={"outlined"}
        color={"primary"}
        sx={{ display: "flex", alignItems: "center",outlineColor:"white" }}
      >
        <AccountCircleIcon
          sx={{ display: "block", color: "white", marginRight: "5px" }}
        />
        <Typography paragraph sx={{ margin: "0", color: "white" }}>
          Sign Up
        </Typography>
      </Button>
    </>
  );
};

export default RegisterBtn;