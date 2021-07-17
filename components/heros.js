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
            Your bite-sized blog on tech, software and more, keeping it short
            and simple but informative, with 500 words give or take per post,
            focuses on vitals
          </p>

          <Subscribe />
        </div>
      </div>
    </div>
  );
};
