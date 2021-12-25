import React from "react";

import { Support } from "../support";
// import { Subscribe } from "../../helpers/subscribe";

import { FaMoneyBillAlt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import styles from "../../styles/extras.module.scss";

export default function Extras() {
  return (
    <>
      <div className={styles.extras}>
        {/* <div className={styles.borderTop}></div> */}
        <div className={styles.contents}>
          <div className={styles.dropdown}>
            {" "}
            <input id="toggle" type="checkbox" />
            <IconContext.Provider value={{ size: "30" }}>
              <label htmlFor="toggle" className={styles.animate}>
                <FaMoneyBillAlt />
              </label>
            </IconContext.Provider>
            <ul className={styles.animate}>
              <Support />
            </ul>
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
