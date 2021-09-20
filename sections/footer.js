import { useRouter } from "next/router";
import styles from "../styles/footer.module.scss";
import React from "react";
import { FaGithub, FaYoutube, FaFacebook } from "react-icons/fa";

import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

export const Footer = () => {
  const router = useRouter();

  const year = React.useMemo(() => {
    const now = new Date();
    return now.getFullYear();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <footer>
          <div className={styles.footerTop}>
            <IconContext.Provider value={{ size: 20 }}>
              <a target="_blank" href="https://github.com/cazterk/">
                <FaGithub />
              </a>

              <a target="_blank" href="https://youtube.com/c/cazterk">
                <FaYoutube />
              </a>
              <a target="_blank" href="https://twitter.com/cazterk">
                <AiFillTwitterCircle />
              </a>
              <a target="_blank" href="https://facebook.com/cazterk">
                <FaFacebook />
              </a>
            </IconContext.Provider>
          </div>
          <div className={styles.footerMid}>
            <p>Terklog • blog </p>
          </div>
          <div className={styles.footerBottom}>
            <small>maintained by cazterk • © {year}</small>
          </div>
        </footer>
      </div>
    </div>
  );
};
