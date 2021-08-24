import React, { useEffect } from "react";
import AdSense from "react-adsense";

export const MyAdSense = () => {
  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }
  }, []);
  return (
    <AdSense.Google
      // client={`${process.env.GOOGLE_CLIENT_ID}`}
      style={{ display: "block", textAlign: "center", height: "8em" }}
      client="ca-pub-8562273230925566"
      slot="3918115707"
      layout="in-article"
      format="auto"
      responsive="true"
    />
  );
};
