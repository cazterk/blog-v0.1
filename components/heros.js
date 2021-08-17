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
            everything in between, subscribe to get the latest updates{" "}
          </p>

          <Subscribe />
        </div>
      </div>
    </div>
  );
};
