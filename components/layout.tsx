import React from "react";
import { Navbar } from "./sections/navbar";
import { Footer } from "./sections/footer";

import Div from "../helpers/darkMode";

import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../helpers/theme";


const Layout = ({ children }) => {
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <React.Fragment>    
      <ThemeProvider theme={theme}>
        <Div>
          <Navbar />
          <main> {children}</main>
          <Footer />
        </Div>
      </ThemeProvider>
    </React.Fragment>
  );
};
export default Layout;
