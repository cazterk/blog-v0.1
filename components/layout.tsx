import React from "react";
import { Navbar } from "./sections/navbar";
import { Footer } from "./sections/footer";
import styles from "../styles/layout.module.scss";
import Div from "../helpers/darkMode";

import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../helpers/theme";

import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";

const Layout = ({ children }) => {
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <React.Fragment>
      <DefaultSeo {...SEO} />
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
