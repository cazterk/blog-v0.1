import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import { Partytown } from "@builder.io/partytown/react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // const GA_MEASUREMENT_ID = "G-G4PJWB3X4Q"; // Paste your GTAG here
    return (
      <Html lang="en">
        <Head>
          <Partytown debug={true} forward={["dataLayer.push"]} />
          // google analytics script
          <Script
            strategy="worker"
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script strategy="worker">
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
          // google adsbygoogle script
          <Script
            strategy="worker"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <Script
            strategy="worker"
            dangerouslySetInnerHTML={{
              __html: `
               (adsbygoogle = window.adsbygoogle || []).push({
                   google_ad_client: '${process.env.GOOGLE_CLIENT_ID}',
                   enable_page_level_ads: true
              });
                `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
