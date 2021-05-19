import React from "react";
import styles from "../styles/subscribe.module.scss";

export const Subscribe = () => {
  return (
    <div>
      <div className={styles.subscribe}>
        <form action="#">
          <div className={styles.subscribe__formBox}>
            <input
              type="text"
              name="EmailAddress"
              placeholder="Enter your email"
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
};
