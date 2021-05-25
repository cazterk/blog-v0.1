import React from "react";
import styles from "../styles/subscribe.module.scss";

export const Subscribe = () => {
  return (
    <div>
      <div className={styles.subscribe}>
        <form action="#" className={styles.subscribe__formBox}>
          <input
            type="text"
            name="EmailAddress"
            placeholder="Enter your email"
          />
        </form>
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
};
