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
            <IconContext.Provider value={{ size: 40 }}>
              <div className={styles.desc}>
                {" "}
                <i id="yt-icon">
                  <FaDonate />
                </i>
                <h2>Live Stats</h2>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 30, color: "#fff" }}>
              <div className={styles.items}>
                <div className={styles.icons}>
                  <div>
                    <i>
                      <RiPatreonLine />
                    </i>
                  </div>
                  <div>
                    <i>
                      <SiBuymeacoffee />
                    </i>
                  </div>
                  <div>
                    <i>
                      <GiButterfly />
                    </i>
                  </div>
                </div>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};
