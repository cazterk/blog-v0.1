import { useRouter } from "next/router";
import styles from "../styles/navbar.module.scss";
import { BsHouseFill } from "react-icons/bs";

export const Navbar = () => {
  const router = useRouter();

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <a className={styles.logo} onClick={() => router.push("/")}>
              {" "}
              terklog
            </a>
            <nav>
              <ul>
                <li>
                  {" "}
                  <a target="_blank" href="https://www.cazterk.xyz/">
                    <BsHouseFill />
                  </a>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
