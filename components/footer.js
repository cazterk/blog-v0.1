import { useRouter } from "next/router";
import styles from "../styles/footer.module.scss";

export const Footer = () => {
  const router = useRouter();

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <a className={styles.logo} onClick={() => router.push("/")}>
              {" "}
              cazterk
            </a>
            <nav>
              <ul>
                <li>
                  {" "}
                  <a onClick={() => (window.location.href = "#")}>
                    link 1
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a onClick={() => (window.location.href = "#")}>
                    link 2
                  </a>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
