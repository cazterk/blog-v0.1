import React from "react";
import { useState, useEffect } from "react";

export const Comments = () => {
  // const [enableLoadComments, setEnableLoadComments] = useState(true);

  useEffect(() => {
    window.gc_params = {
      graphcomment_id: "terklog",
      fixed_header_height: 0,
    };

    (function () {
      var gc = document.createElement("script");
      gc.type = "text/javascript";
      gc.async = true;
      gc.src = "https://graphcomment.com/js/integration.js?" + Date.now();
      (
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(gc);
    })();
  }, []);

  return (
    <div>
      <div id="graphcomment"></div>
    </div>
  );
};
