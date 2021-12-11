import React from "react";

import { Support } from "../support";
// import { Subscribe } from "../../helpers/subscribe";

import { FaMoneyCheckAlt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import styles from "../../styles/extras.module.scss";

export default function Extras() {
  return (
    <>
      <div className={styles.extras}>
        {/* <div className={styles.borderTop}></div> */}
        <div className={styles.contents}>
          <IconContext.Provider value={{ size: "60" }}>
            <div className={styles.support}>
              <i className={styles.icon}>
                <FaMoneyCheckAlt />
              </i>{" "}
              <div className={styles.support__hover}>
                <Support />
              </div>
            </div>
          </IconContext.Provider>
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
