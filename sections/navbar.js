import { useState } from "react";
import { useRouter } from "next/router";
import { DarkModeToggle } from "../components/darkModeToggle";
import styles from "../styles/navbar.module.scss";
import { BsHouseFill } from "react-icons/bs";

export const Navbar = () => {
  const router = useRouter();
  const [isToggled, setIsToggled] = useState();

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
                  <DarkModeToggle />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};