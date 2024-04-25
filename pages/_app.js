// pages/_app.js

import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import theme from "../styles/theme";
import Navbar from "../components/Navbar";
import "@fontsource/roboto-condensed"; // Import Roboto Condensed font

const GlobalStyle = ({ children }) => (
  <Global
    styles={css`
      /* Add global styles here */
      body {
        font-family: "Roboto Condensed", sans-serif;
      }
    `}
  />
);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
