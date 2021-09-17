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
          <div className={styles.footerTop}>
            <IconContext.Provider value={{ size: 20 }}>
              <a target="_blank" href="https://github.com/cazterk/">
                <FaGithub />
              </a>
              <a target="_blank" href="https://cazterk.itch.io/">
                <FaItchIo />
              </a>
              <a target="_blank" href="https://youtube.com/c/cazterk">
                <FaYoutube />
              </a>
              <a target="_blank" href="https://twitter.com/cazterk">
                <FaTwitter />
              </a>
              <a target="_blank" href="https://facebook.com/cazterk">
                <FaFacebookSquare />
              </a>
              <a target="_blank" href="https://www.instagram.com/cazterk/">
                <FaInstagram />
              </a>
            </IconContext.Provider>
          </div>

          <div className={styles.footerMid}>
            <i>
              <IoLocationSharp />
              chilanga lusaka zambia
            </i>

            <i>
              <GrMail />
              zcephas2@gmail.com
            </i>
          </div>
          <div className={styles.footerBottom}>
            <small>terklog © {year} All Rights Reserved.</small>
          </div>
        </footer>
      </div>
    </div>
  );
};
