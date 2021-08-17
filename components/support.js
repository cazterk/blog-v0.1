import { useRouter } from "next/router";
import styles from "../styles/support.module.scss";
import { IconContext } from "react-icons/lib";
import { SiBuymeacoffee, SiPatreon } from "react-icons/si";
import { GiButterfly, GiReceiveMoney } from "react-icons/gi";
import { MdMonetizationOn } from "react-icons/md";

export const Support = () => {
  const router = useRouter();

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}> Surpport My Work</h2>
        <div className={styles.support}>
          <IconContext.Provider value={{ size: 35 }}>
            <div className={styles.support__portal}>
              <a target="_blank" href="https://www.buymeacoffee.com/cazterk">
                <SiBuymeacoffee />
                <p id={styles.buymeacoffee}>Buymeacoffee</p>
              </a>
              <a
                target="_blank"
                href="https://dashboard.flutterwave.com/donate/h674qnrb4x0w"
              >
                <GiButterfly />
                <p id={styles.butter}>Flutterwave ( paypal supported ) </p>
              </a>
              <a target="_blank" href="https://www.subscribestar.com/cazterk">
                <GiReceiveMoney />
                <p id={styles.subscribestar}>Subscribestar</p>
              </a>

              <a target="_blank" href="https://patreon.com/cazterk">
                <SiPatreon />
                <p id={styles.patreon}>Patreon</p>
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
