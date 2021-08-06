import React from "react";
import styles from "../styles/coffee.module.scss";

export const Coffee = () => {
  return (
    <>
      {" "}
      <a target="_blank" href="https://www.buymeacoffee.com/cazterk">
        <button className={styles.button}>
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
          />
          <span>Buy me a coffee</span>
        </button>
      </a>
    </>
  );
};
