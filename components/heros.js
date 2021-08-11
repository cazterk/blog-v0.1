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
            With the principle of continuous improvement, the terklog delivers
            quality content that's ever getting better, subscribe to get the
            latest updates{" "}
          </p>

          <Subscribe />
        </div>
      </div>
    </div>
  );
};
