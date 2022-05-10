import React from "react";

import { Navbar } from "./sections/navbar";
import { Footer } from "./sections/footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <main> {children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default Layout;
