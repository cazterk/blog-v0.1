import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // const GA_MEASUREMENT_ID = "G-G4PJWB3X4Q"; // Paste your GTAG here
    return (
      // <Html lang="en">
      //   <Head>
      //     <script
      //       strategy="afterInteractive "
      //       async
      //       src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      //     />
      //     <script
      //       dangerouslySetInnerHTML={{
      //         __html: `
      //          (adsbygoogle = window.adsbygoogle || []).push({
      //              google_ad_client: '${process.env.GOOGLE_CLIENT_ID}',
      //              enable_page_level_ads: true
      //         });
      //           `,
      //       }}
      //     />
      //   </Head>
      //   <body>
      //     <Main />
      //     <NextScript />
      //   </body>
      // </Html>
      <></>
    );
  }
}

export default MyDocument;
