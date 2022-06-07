import {createTheme} from "@mui/material";


const primaryMain="#5f82bb"
const primaryDark="#13315C"
// const primaryDark="#28B67E"
export const theme = createTheme({
  palette:{
    primary:{
      main:primaryMain,
      dark:primaryDark
    }
  },
  // typography: {
  //   fontFamily: [
  //     '"Montserrat"',
  //     '-apple-system',
  //     'BlinkMacSystemFont',
  //     '"Segoe UI"',
  //     'Roboto',
  //     '"Helvetica Neue"',
  //     'Arial',
  //     'sans-serif',
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"',
  //   ].join(','),
  // },
})