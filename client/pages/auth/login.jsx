import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios from "axios";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../../services/user-service";
import Copyright from "../../components/Copyright";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 1,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 1,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 3,
      padding: "4px !important", // override inline-style
    },
  },
}));

const theme = createTheme();

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const pass = data.get("password");
    console.log("handleSubmit");

    const status = await userService.loginUser({
      identifier: `${email}`,
      password: `${pass}`,
    });

    console.log("login status", status);
    // status ? (submitting = true) : (submitting = false);
    const temp = localStorage.getItem("user");
    const user = JSON.parse(temp);

    console.log("Congratulation:", user);
    console.log("jwt:", user?.jwt);

    if ( user?.jwt!=undefined && user?.jwt) {
      Router.push("/");
    } else {
      console.log("Error login");
      alert("Будьласка введіть вірні дані")
    }
  };

  const handleEmailValid = (e) => {
    setEmail(e.target.value);
    const reg = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
    setError(reg.test(e.target.value));
  };

  const handlePassValid = (e) => {
    setPass(e.target.value);
    const reg = new RegExp("^.{6,}$");
    setPassError(reg.test(e.target.value));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                className={classes.textField}
                name="email"
                label="Email Address"
                variant={"outlined"}
                margin="normal"
                fullWidth
                id="email"
                value={email}
                onChange={(e) => handleEmailValid(e)}
                error={!error}
                autoComplete="email"
                autoFocus
              />
              <TextField
                className={classes.textField}
                name="password"
                label="Password"
                variant={"outlined"}
                margin="normal"
                value={pass}
                onChange={(e) => handlePassValid(e)}
                error={!passError}
                fullWidth
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/*<FormControlLabel*/}
              {/*  control={<Checkbox value="remember" color="primary" />}*/}
              {/*  label="Remember me"*/}
              {/*/>*/}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!error || !passError}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="./register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
