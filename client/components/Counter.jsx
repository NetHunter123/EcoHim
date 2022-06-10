import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // color: theme.palette.primary.main,
    fontSize: "24px",
    fontWeight: 300,
    fontFamily: "Montserrat",
    padding: "10px 5px",
    border: "0",
    backgroundColor: "#ffffff",
  },
}));

const Counter = ({ price, item }) => {
  const [count, setCount] = useState(1);
  const classes = useStyles();
  item.count = count;
  function inc() {
    setCount((prev) => {
      return prev + 1;
    });
  }
  //
  function dec() {
    setCount((prev) => {
      // return  prev !=1 && prev - 1
      return prev >= 2 ? prev - 1 : prev;
    });
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
          padding: "5px 10px",
          backgroundColor: "#E1E1E1",
          flexWrap:"wrap",

        }}
      >
        <Typography
          style={{
            margin: "0 15px 0px 0px",
            padding: "0",
            display: "flex",
            alignItems: "center",
          }}
        >
          Кількість замовлення:
        </Typography>
        <Box style={{display:"flex",backgroundColor:"#749EE3",borderRadius:"5px",alignItems:"center",paddingRight:"5px" }}>
          <Box style={{display:"flex",height:"30px",marginRight:"5px"}}>
            <button
              className={classes.btn}
              onClick={inc}
              style={{ borderRight: "1px solid #000",borderRadius:"5px 0 0 5px" }}
            >
              +
            </button>
            <input
              value={count}
              style={{
                margin: "0",
                padding: "0",
                width: "30px",
                borderRadius: "0px",
                border: "0px",
                textAlign: "center",
              }}
            />
            <button
              className={classes.btn}
              onClick={dec}
              style={{  borderLeft: "1px solid #000",borderRadius:"0 5px 5px 0" }}
              type=""
            >
              -
            </button>
          </Box>
          <p style={{ textAlign: "center", margin: "0", padding: "0",color:"#fff" }}>
            {price * count}
          </p>
        </Box>
      </div>
    </>
  );
};

export default Counter;
