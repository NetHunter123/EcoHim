import React from 'react';
import ListItem from "@mui/material/ListItem";
import NextLink from "next/link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import ListItemText from "@mui/material/ListItemText";

const MenuItem = (href,{children},text, open) => {
  return (
    <>
      <ListItem key={"ref"} disablePadding sx={{ display: "block" }}>
        <NextLink href={`${href}`} passHref>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {children}
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>
              {text}
            </ListItemText>
          </ListItemButton>
        </NextLink>
      </ListItem>
    </>
  );
};

export default MenuItem;