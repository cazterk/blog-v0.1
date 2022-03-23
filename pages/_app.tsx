import "../styles/_global.scss";
import React from "react";

import Layout from "../components/layout";

require("typeface-nunito");

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>{<Component {...pageProps} />}</Layout>
    </>
  );
}

export default MyApp;
