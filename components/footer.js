import { useRouter } from "next/router";
import styles from "../styles/footer.module.scss";
import React from "react";
import {
  FaInstagram,
  FaItchIo,
  FaGithub,
  FaYoutube,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
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
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerLeft}>
            <a
              className={styles.footerLeft__logo}
              onClick={() => router.push("/")}
            >
              {" "}
              terklog
            </a>
            <div className={styles.footerLeft__socials}>
              <IconContext.Provider value={{ size: 15 }}>
                <div className={styles.icons}>
                  {" "}
                  <a target="_blank" href="https://facebook.com/cazterk">
                    <FaFacebookSquare />
                  </a>{" "}
                  <a target="_blank" href="https://www.instagram.com/cazterk/">
                    <FaInstagram />
                  </a>{" "}
                  <a target="_blank" href="https://twitter.com/cazterk">
                    <FaTwitter />
                  </a>{" "}
                  <a target="_blank" href="https://youtube.com/c/cazterk">
                    <FaYoutube />
                  </a>{" "}
                  <a target="_blank" href="https://github.com/cazterk/">
                    <FaGithub />
                  </a>{" "}
                  <a target="_blank" href="https://cazterk.itch.io/">
                    <FaItchIo />
                  </a>{" "}
                </div>
              </IconContext.Provider>
              <small className={styles.footerLeft__copyrights}>
                terklog © {year} All Rights Reserved.
              </small>
            </div>
          </div>

          <div className={styles.footerRight}>
            <h1>Contact</h1>
            <div className={styles.footerRight__border}></div>
            <ul className={styles.footerRight__list}>
              <li>
                <IoLocationSharp />
                chilanga lusaka zambia
              </li>

              <li>
                <GrMail />
                zcephas2@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
