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
      <div className={styles.container}>
        <footer>
          <div className={styles.footerLeft}>
            <h3 className={styles.footerLeft__heading}> More content</h3>

            <IconContext.Provider value={{ size: 15 }}>
              <a target="_blank" href="https://youtube.com/c/cazterk">
                <FaYoutube /> youtube
              </a>{" "}
              <a target="_blank" href="https://github.com/cazterk/">
                <FaGithub /> github
              </a>{" "}
              <a target="_blank" href="https://cazterk.itch.io/">
                <FaItchIo /> itchIo
              </a>{" "}
            </IconContext.Provider>
          </div>
          <div className={styles.footerMid}>
            <h3 className={styles.footerLeft__heading}> Socials</h3>

            <IconContext.Provider value={{ size: 15 }}>
              {" "}
              <a target="_blank" href="https://facebook.com/cazterk">
                <FaFacebookSquare /> facebook
              </a>{" "}
              <a target="_blank" href="https://www.instagram.com/cazterk/">
                <FaInstagram /> instagram
              </a>{" "}
              <a target="_blank" href="https://twitter.com/cazterk">
                <FaTwitter /> twitter
              </a>{" "}
            </IconContext.Provider>
          </div>
          <div className={styles.footerRight}>
            <h3 className={styles.footerRight__heading}>Contact</h3>

            <i>
              <IoLocationSharp />
              chilanga lusaka zambia
            </i>

            <i>
              <GrMail />
              zcephas2@gmail.com
            </i>
          </div>
        </footer>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottom__logo}>
            <a onClick={() => router.push("/")}> terklog</a>
          </div>
          <small className={styles.footerLeft__copyrights}>
            terklog © {year} All Rights Reserved.
          </small>
        </div>
      </div>
    </div>
  );
};
