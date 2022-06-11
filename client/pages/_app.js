import { Provider } from "react-redux";
import { useStore } from "../store";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../styles/theme";
import MainLayout from "../layout/MainLayout";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          {/*<AnimatePresence exitBeforeEnter>*/}
          <Component {...pageProps} />
          {/*</AnimatePresence>*/}
      </ThemeProvider>
    </Provider>
  );
}
