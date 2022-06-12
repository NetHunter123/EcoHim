import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";
import CitiesNP from "./CitiesNP";
import { WarehouseNp } from "./WarehouseNP";
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  btn: {
    display: "block",
    color: theme.palette.primary.main,
    fontSize: "16px",
    fontWeight: 600,
    margin: "0px",
  },
  dialog: {
    zIndex: 1300,
    // "&:first-child": {
    //   maxWidth: "100vw",
    //   width: "100vw",
    //   maxHeight: "80%",
    //   height: "100vh",
    //   margin: "0px",
    // },
  },
}));

export default function Checkout({ text }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState();
  const [warehouse, setWarehouse] = useState();
  const {sendText,orderListText } = text()


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendForm = async () => {
    // const sendText = text()

    try {
      await axios.post("http://localhost:3000/api/send-request", {
        name,
        surname,
        middleName,
        email,
        phone,
        city,
        warehouse,
        sendText
      });
    } catch (err) {
      console.log("Sending error", err);
    }
  };
  return (
    <>
      <Button
        className={classes.btn}
        variant="outlined"
        onClick={() => {
          handleClickOpen();
        }}
        style={{ borderRadius: "20px",width:"100%" }}
        disabled={sendText === " "? true:false }
      >
        Оформити замовлення
      </Button>
      <Dialog
        open={open}
        className={classes.dialog}
        style={{}}
        onClose={handleClose}
      >
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <DialogTitle style={{ padding: "10px" }}>Замовлення</DialogTitle>
          <Button className={classes.btn} onClick={handleClose}>
            X
          </Button>
        </Box>
        <DialogContent style={{ padding: "0px 10px" }}>
          <TextField
            autoFocus
            margin="dense"
            id="name_user"
            label="Ім'я"
            type="text"
            fullWidth
            variant="standard"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="user_surname"
            label="Прізвище"
            type="text"
            fullWidth
            variant="standard"
            required
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="user_middleName"
            label="По-батькові"
            type="text"
            fullWidth
            variant="standard"
            required
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Телефон"
            type="tel"
            fullWidth
            variant="standard"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <Box style={{}}>
            <CitiesNP
              cityToCheckout={(e) => {
                setCity(e);
              }}
            />
            {city && (
              <WarehouseNp
                city={city}
                warehouseToCheckout={(e) => {
                  setWarehouse(e);
                }}
              />
            )}
          </Box>
          <DialogContentText>{sendText}</DialogContentText>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: "space-between", flexWrap: "wrap-reverse" }}
        >
          <Button
            className={classes.btn}
            type={"button"}
            style={{ margin: "0px" }}
            onClick={() => {
              console.log("Name", name);
              console.log("Surname", surname);
              console.log("MiddleName", middleName);
              console.log("Email", email);
              console.log("Tell", phone);
              console.log("Сity", city?.title);
              console.log("WarehouseNp", warehouse?.title);
              // name &&
              //   surname &&
              //   middleName &&
              //   email &&
              //   phone &&
              //   city &&
              //   warehouse &&
              sendForm();
            }}
          >
            Надіслати замовлення
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
