import { useRouter } from "next/router";
import styles from "../styles/footer.module.scss";
import React from "react";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

export const Footer = () => {
  const router = useRouter();

  const year = React.useMemo(() => {
    const now = new Date();
    return now.getFullYear();
  }, []);

  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerSection}>
            <a className={styles.logo} onClick={() => router.push("/")}>
              {" "}
              cazterk
            </a>
            <small className={styles.copyrights}>
              cazterk © {year} All Rights Reserved.
            </small>
            <nav>
              <ul>
                <li>
                  {" "}
                  <a target="_blank" href="https://facebook.com/cazterk">
                    <AiFillFacebook />
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a target="_blank" href="https://www.instagram.com/cazterk/">
                    <FaInstagramSquare />
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a target="_blank" href="https://twitter.com/cazterk">
                    <AiFillTwitterSquare />
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
