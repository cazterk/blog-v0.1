import { useRouter } from "next/router";
import styles from "../styles/heros.module.scss";
import { Subscribe } from "./subscribe";

export const Heros = () => {
  const router = useRouter();

  return (
    <div>
      <div className={styles.heros}>
        <div className={styles.container}>
          <h1 className={styles.heros__hTitle}>welcome to the terklog</h1>
          <p className={styles.heros__subtitle}>
            here to deliver top-notch hot takes on technology, software, and
            everything in between, the terklog aims to be on the path to
            continuous delivery and improvement, subscribe to get the latest
            updates{" "}
          </p>

          <Subscribe />
        </div>
      </div>
    </div>
  );
};
