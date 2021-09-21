import styles from "../styles/heros.module.scss";
// import { Subscribe } from "../components/subscribe";
import { CgArrowLongRight } from "react-icons/cg";

export const Heros = () => {
  return (
    <div>
      <div className={styles.heros}>
        <div className={styles.container}>
          <h1>welcome to the terklog</h1>
          <p>
            here to deliver top-notch hot takes on technology, software, and
            everything in between, subscribe to get the latest updates{" "}
            <span>
              <CgArrowLongRight />
            </span>{" "}
          </p>

          {/* <Subscribe /> */}
        </div>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};
