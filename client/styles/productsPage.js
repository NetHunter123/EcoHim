import {makeStyles} from "@material-ui/styles";
import Available from "../components/Available";

const useStyles = makeStyles((theme) => ({
  available:{
    fontSize: "12px",
    textTransform:"uppercase",
    padding:"3px 10px",
    backgroundColor:"#1976D2",
    textAlign:"center",
    borderRadius:"25px",
    color:"white",
    marginBottom:"5px"
  },
  outOfStock:{
    backgroundColor:"orange",
  }
}));

export default useStyles