import "../styles/_global.scss";
import React from "react";
import Script from "next/script";

import { Partytown } from "@builder.io/partytown/react";

import Layout from "../components/layout";

require("typeface-nunito");

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Partytown debug={true} forward={["dataLayer.push"]} />
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="worker"
      />

      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `,
        }}
        type="text/partytown"
      />

      <Layout>{<Component {...pageProps} />}</Layout>
    </>
  );
}

export default MyApp;
