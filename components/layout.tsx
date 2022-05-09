import React from "react";
import { useState } from "react";

import { Navbar } from "./sections/navbar";
import { Footer } from "./sections/footer";

import Div from "../helpers/darkMode";

import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../helpers/theme";

const Layout = ({ children }) => {
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;
  const [themeMode, setThemeMode] = useState(theme);
  return (
    <React.Fragment>
      {/* <ThemeProvider theme={theme}> */}
      <div>
        <Navbar />
        <main> {children}</main>
        <Footer />
      </div>
      {/* </ThemeProvider> */}
    </React.Fragment>
  );
};
export default Layout;
