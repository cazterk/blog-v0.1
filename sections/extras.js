import React from "react";
import { Support } from "../components/support";
import { Subscribe } from "../components/subscribe";
import styles from "../styles/extras.module.scss";

export default function Extras() {
  return (
    <>
      <div className={styles.extras}>
        {/* <div className={styles.borderTop}></div> */}
        <div className={styles.contents}>
          <div className={styles.support}>
            <h2>Support Me</h2>{" "}
            <div>
              <Support />
            </div>
          </div>
          {/* <div className={styles.sub}>
          <h2>Subscribe</h2>
          <div>
            <Subscribe />
          </div>
        </div> */}
        </div>
        {/* <div className={styles.borderBottom}></div> */}
      </div>
    </>
  );
}
