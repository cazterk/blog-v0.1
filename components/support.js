import { useRouter } from "next/router";
import styles from "../styles/support.module.scss";
import { BsHouseFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { FaDonate } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { RiPatreonLine } from "react-icons/ri";
import { GiButterfly } from "react-icons/gi";

export const Support = () => {
  const router = useRouter();

  return (
    <div>
      <div className={styles.support}>
        <div className={styles.statscontainer}>
          <div className={styles.main}>
            {/* item 1 */}
            <IconContext.Provider value={{ size: 40, color: "#fff" }}>
              <div className={styles.desc}>
                {" "}
                <i id="yt-icon">
                  <FaDonate />
                </i>
                <h2>Support Me</h2>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 30, color: "#fff" }}>
              <div className={styles.items}>
                <div className={styles.icons}>
                  <a
                    target="_blank"
                    href="https://patreon.com/cazterk"
                    id={styles.icon}
                  >
                    <i>
                      <RiPatreonLine />
                    </i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.buymeacoffee.com/cazterk"
                    id={styles.icon}
                  >
                    <i>
                      <SiBuymeacoffee />
                    </i>
                  </a>
                  <a
                    target="_blank"
                    href="https://dashboard.flutterwave.com/donate/h674qnrb4x0w"
                    // id={styles.icon}
                  >
                    <i>
                      <GiButterfly />
                    </i>
                  </a>
                </div>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};
