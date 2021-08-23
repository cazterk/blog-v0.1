import React from "react";
import AdSense from "react-adsense";

export default function AdSense() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);
  return (
    <AdSense.Google
      client="ca-pub-7292810486004926"
      slot="7806394673"
      style={{ display: "block" }}
      format="auto"
      responsive="true"
      layoutKey="-gw-1+2a-9x+5c"
    />
  );
}