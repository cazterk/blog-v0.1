import { useRouter } from "next/router";
import { DarkModeToggle } from "../darkModeToggle";
import styles from "../../styles/navbar.module.scss";

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
