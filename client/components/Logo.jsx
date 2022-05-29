import React from 'react';
import {Link as MUILink} from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import logo from "../public/logo.webp";
import NextLink from "next/link";

const Logo = () => {
  return (
    <>
      <NextLink href="/" passHref>
        <MUILink
          style={{
            marginRight: "auto",
          }}
        >
          <Box
            // className={classes.link}
            href={"/"}
            style={{
              position: "relative",
              height: "55px",
              width: "140px",
              marginRight: "auto",
            }}
          >
            <Image
              layout="fill"
              objectFit="contain"
              quality={100}
              src={logo}
              placeholder={"blur"}
            />
          </Box>
        </MUILink>
      </NextLink>
    </>
  );
};

export default Logo;