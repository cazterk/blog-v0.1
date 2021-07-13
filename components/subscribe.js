import React from "react";
import { useState } from "react";
import axios from "axios";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styles from "../styles/subscribe.module.scss";

export const Subscribe = () => {
  const MAILCHIMP_URL = process.env.MAILCHIMP_URL;

  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div>
      <div className={styles.subscribe}>
        <form action="#" className={styles.subscribe__formBox}>
          <input
            type="text"
            name="EmailAddress"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        <button
          type="submit"
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          Subscribe
        </button>
      </div>
      {state === "ERROR" && (
        <p style={{ color: "#ff6b6b", margin: "0.2em" }}>{errorMessage}</p>
      )}
      {state === "SUCCESS" && <p>Success!</p>}
    </div>
  );
};
