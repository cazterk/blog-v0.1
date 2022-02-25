import React from "react";

import { Support } from "../support";
import { Subscribe } from "../../helpers/subscribe";

import { FaMoneyBillAlt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import styles from "../../styles/extras.module.scss";

export default function Extras() {
  return (
    <>
      <div className={styles.extras}>
        {/* <div className={styles.borderTop}></div> */}

        <div className={styles.contents}>
          <div className={styles.contents__item}>
            <h2>Love what you see?</h2>
            <p className={styles.subp}>
              Well consider subscribing for updates.
            </p>
          </div>
          <div className={styles.subForm}>
            {" "}
            <Subscribe />
          </div>
        </div>
      </div>
    </>
  );
}
