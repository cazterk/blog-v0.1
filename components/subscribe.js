import React, { HTMLProps } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/subscribe.module.scss";
import { Spinner } from "./spinner";

export const Subscribe = () => {
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
          disabled={state === "LOADING" ? "" : ""}
          onClick={subscribe}
        >
          {(state === "IDLE" || state === "ERROR" || state === "SUCCESS") && (
            <p> Subscribe</p>
          )}
          {state === "LOADING" && (
            <i>
              <Spinner />
            </i>
          )}
        </button>
      </div>
      {state === "ERROR" && (
        <p
          style={{
            color: "#ff6b6b",
            margin: "0",
            fontWeight: "700",
            fontSize: "small",
          }}
        >
          {errorMessage}
        </p>
      )}
      {state === "SUCCESS" && (
        <p
          style={{
            color: "#17B890",
            margin: "0",
            fontWeight: "670",
            fontSize: "small",
          }}
        >
          subscribed successful!!
        </p>
      )}
    </div>
  );
};
