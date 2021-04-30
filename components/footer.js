import { useRouter } from "next/router";
import styles from "../styles/footer.module.scss";
import React from "react";

export const Footer = () => {
  const router = useRouter();

  const year = React.useMemo(() => {
    const now = new Date();
    return now.getFullYear();
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <a className={styles.logo} onClick={() => router.push("/")}>
              {" "}
              cazterk
            </a>
            <small className="copyrights">
              cazterk © {year} All Rights Reserved.
            </small>
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
      </div>
    </div>
  );
};
