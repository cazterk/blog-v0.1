import React from "react";
import { Navbar } from "../sections/navbar";
import { Footer } from "../sections/footer";
import styles from "../styles/layout.module.scss";
import Div from "./darkMode";

import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

import SEO from "./seo";
const Layout = ({ children, title, description, image, slug, article }) => {
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <React.Fragment>
      <SEO
        title={title}
        description={description}
        image={image}
        slug={slug}
        article={article}
      />
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
