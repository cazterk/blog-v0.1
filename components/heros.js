import { useRouter } from "next/router";
import styles from "../styles/heros.module.scss";

export const Heros = () => {
  const router = useRouter();

  return (
    <div>
      <div className={styles.heros}>
        <div className={styles.container}>
          <h1>Cazterk's blog</h1>
          <p className={styles.subtitle}>
            Your bite-sized blog, keeping it short and simple but informative
          </p>

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
      </div>
    </div>
  );
};
