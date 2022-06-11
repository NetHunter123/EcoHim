import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  appToolbar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      paddingLeft:"10px"
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft:"10px",
      paddingRight:"10px"
    },
  },
  menuBtn: {
    display:"flex",
    justifyContent:"center",
    [theme.breakpoints.up("sm")]: {
      width: "66px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "56px",
    },
  },
  sideBar: {
    position: "fixed",
    left: "0",
    top: "0",
    zIndex: "100",
  },

  drawerWrapper: {},
  contentWrapper: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "66px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "56px",
    },
  },


  btn: {
    display: "flex",
    alignItems: "center",
    border:"1px solid ",
    borderColor: "white",
    padding: "10px 15px",
    '&:hover': {
      borderColor: "aqua ",
    },
  },
}));
