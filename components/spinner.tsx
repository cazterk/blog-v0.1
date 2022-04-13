import React from "react";
import styles from "../styles/spinner.module.scss";

export const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loaderWrapper}>
        <div className={styles.loaderWrapper__loader}>
          <div className={styles.loaderWrapper__innerLoader}></div>
        </div>
      </div>
    </div>
  );
};
