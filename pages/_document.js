import Document, { Html, Head, Main, NextScript } from "next/document";
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
          <script
            strategy="afterInteractive"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            type="text/partytown"
          />
          <script
            type="text/partytown"
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
