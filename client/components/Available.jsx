import React from "react";
import { Typography } from "@mui/material";

import useStyles from "../styles/productsPage";

const Available = (available) => {
  const classes = useStyles();

  return (
    <Typography
      variant={"caption"}
      component="div"
      className={
      available
      ?classes.available
      :classes.available+" "+ classes.outOfStock}
    >
      {available
      ? "є в наявності"
      :"немає в наявності"}
    </Typography>
  );
};

export default Available;
