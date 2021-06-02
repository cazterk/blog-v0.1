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
            <h2 className={styles.footerLeft__heading}> Stay in touch</h2>

            <IconContext.Provider value={{ size: 15 }}>
              {" "}
              <a target="_blank" href="https://facebook.com/cazterk">
                <FaFacebookSquare /> FaFacebookSquare
              </a>{" "}
              <a target="_blank" href="https://www.instagram.com/cazterk/">
                <FaInstagram /> instagram
              </a>{" "}
              <a target="_blank" href="https://twitter.com/cazterk">
                <FaTwitter /> twitter
              </a>{" "}
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

          <div className={styles.footerRight}>
            <h2 className={styles.footerRight__heading}>Contact</h2>
            <div className={styles.footerRight__border}></div>

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
          <a
            className={styles.footerLeft__logo}
            onClick={() => router.push("/")}
          >
            {" "}
            terklog
          </a>
          <small className={styles.footerLeft__copyrights}>
            terklog © {year} All Rights Reserved.
          </small>
        </div>
      </div>
    </div>
  );
};
