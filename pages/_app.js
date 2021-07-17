import "../styles/_global.scss";
import Head from "next/head";
require("typeface-nunito");

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
