import React from "react";
import { Typography } from "@mui/material";
import Link from "next/link";

const Copyright = (props) => {
  return (
    <>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="/">
          EcoHim-IF
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
};

export default Copyright;
