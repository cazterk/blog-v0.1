import "../styles/_global.scss";
import React from "react";
import Head from "next/head";
import Script from "next/script";
import { useState, useEffect } from "react";

import SEO from "@bradgarropy/next-seo";

import Layout from "../components/layout";

require("typeface-nunito");

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <SEO
        title="terklog"
        description="This is the terklog blog"
        keywords={["blog", "software", "tech"]}
        twitter={{
          card: "summary",
          site: "@cazterk",
        }}
      />
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {" "}
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>

      <Layout>{isMounted && <Component {...pageProps} />}</Layout>
    </>
  );
}

export default MyApp;
