import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
import AuthBtn from "./AuthBtn";
import Logo from "./Logo";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import CategoryIcon from "@mui/icons-material/Category";
import NextLink from "next/link";
import MenuItem from "./MenuItem";
import { ExpandLess, ExpandMore, ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import { Collapse } from "@mui/material";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { GetProductFetch, ProductFetch } from "../actions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";

const drawerWidth = 340;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const useStyles = makeStyles((theme) => ({
  Appclass: {
    backgroundColor: theme.palette.primary.main,
  },
  sideBar: {
    position: "fixed",
    left: "0",
    top: "0",
    zIndex: "100",
  },

  drawerWrapper: {},
}));

export default function TopLayout({ children }) {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const hovers = {
    initial: {
      whileHover: {
        scale: 1,
        rotate: 180,
        transition: { duration: 0.3, ease: easing },
      },

      whileTap: {
        scale: 1,
        rotate: -180,
        borderRadius: "100%",
      },
    },
    animate: {
      whileHover: {
        scale: 1.3,
        rotate: 90,
        transition: { duration: 0.6, ease: easing },
      },

      whileTap: {
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%",
      },
    },
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{ display: "flex" }}
        component={motion.div}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        bgcolor={"#E1E1E1"}
      >
        <CssBaseline />
        <AppBar className={classes.Appclass} position="fixed" open={open}>
          <Toolbar
            sx={{
              paddingRight: "5px",
              justifyContent: "space-between",
              padding: "5px 0",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
              component={motion.div}
              variants={hovers}
            >
              <MenuIcon />
            </IconButton>

            <Logo />
            <NextLink href="/cart" passHref>
              <AuthBtn
                onClick={() => router.push("/cart")}
                variant={"outlined"}
                color={"primary"}
                style={{
                  marginRight: "15px",
                  padding: "10px",
                }}
              >
                <ShoppingCart sx={{ display: "block", color: "white" }} />
              </AuthBtn>
            </NextLink>

            <NextLink href="/auth/login" passHref>
              <AuthBtn
                variant={"outlined"}
                color={"primary"}
                sx={{}}
                text={"Sign IN"}
              >
                <AccountCircleIcon
                  sx={{ display: "block", color: "white", marginRight: "5px" }}
                />
              </AuthBtn>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Box
          className={classes.drawerWrapper}
          sx={{ width: "66px" }}
          sm={{ width: "74px" }}
        >
          {" "}
        </Box>
        <Drawer className={classes.sideBar} variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <NextLink href="/" passHref>
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
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                    Головна
                  </ListItemText>
                </ListItemButton>
              </NextLink>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <NextLink href="/products" passHref>
                <ListItemButton
                  onClick={() => {
                    // dispatch(GetProductFetch("http://localhost:1337/api/products"))
                  }}
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
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                    Категорії
                  </ListItemText>
                </ListItemButton>
              </NextLink>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <NextLink href="/contacts" passHref>
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
                    <ContactsIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                    Наші Контакти
                  </ListItemText>
                </ListItemButton>
              </NextLink>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <NextLink href="/aboutUs" passHref>
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
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                    Про Нас
                  </ListItemText>
                </ListItemButton>
              </NextLink>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          style={{ minHeight: "calc(100vh - 100px)" }}
          sx={{ flexGrow: 1 }}
        >
          <DrawerHeader />
          {/*<div style={{ overflowX: "hidden" }}>*/}
          {children}
          {/*</div>*/}
        </Box>
      </Box>
    </>
  );
}
