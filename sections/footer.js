import { useRouter } from "next/router";
import React from "react";

import { FaGithub, FaYoutube, FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { TiArrowRight } from "react-icons/ti";

import styles from "../styles/footer.module.scss";

export const Footer = () => {
  const year = React.useMemo(() => {
    const now = new Date();
    return now.getFullYear();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <footer>
          <div className={styles.footerTop}>
            <IconContext.Provider value={{ size: 24 }}>
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
            <p>terklog • blog </p>
          </div>
          <div className={styles.footerBottom}>
            <small>
              maintainer
              <TiArrowRight />
              cazterk • © {year}
            </small>
          </div>
        </footer>
      </div>
    </div>
  );
};
