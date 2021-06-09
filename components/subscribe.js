import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styles from "../styles/subscribe.module.scss";

export const Subscribe = () => {
  const MAILCHIMP_URL = process.env.MAILCHIMP_URL;

  return (
    <div>
      <div className={styles.subscribe}>
        <form action="#" className={styles.subscribe__formBox}>
          <input
            type="text"
            name="EmailAddress"
            placeholder="enter your email"
          />
        </form>
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
};
