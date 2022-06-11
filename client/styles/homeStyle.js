import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainWrapper:{
    [theme.breakpoints.down("md")]: {
      padding:"15px 10px"
    },
    [theme.breakpoints.down("sm")]: {
      padding:"15px 5px"
    },
  },
  categoryBox: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px",
    minHeight: "28vh",
    padding: "20px",
    overflow: "hidden",
  },
  imageCategory: {
    borderRadius: "20px",
  },
  textBoxWrapper: {
    position: "relative",
    cursor:"pointer"
  },
  textBox: {
    position: "absolute",
    borderRadius: "20px",
    padding: "10px",
    overflow: "hidden",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#00000075",
    color: "white",
  },
}));

export default useStyles