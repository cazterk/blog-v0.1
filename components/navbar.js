import { useRouter } from "next/router";
import styles from "../styles/navbar.module.scss";

export const Navbar = () => {
  const router = useRouter();

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <a className={styles.logo} onClick={() => router.push("/")}>
              {" "}
              cazterk
            </a>
            <nav>
              <ul>
                <li>
                  {" "}
                  <a onClick={() => (window.location.href = "#")}>
                    link 1
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a onClick={() => (window.location.href = "#")}>
                    link 2
                  </a>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
    //   <div>
    //   <header>
    //     <div class="container">
    //       <div class="navbar">
    //         <nuxt-link to="/" class="logo"> cazterk</nuxt-link>
    //         <nav>
    //           <ul>
    //             <li><nuxt-link to="#footer">Socials</nuxt-link></li>
    //             <li><nuxt-link to="/support">Support Me</nuxt-link></li>
    //           </ul>
    //         </nav>
    //       </div>
    //     </div>
    //   </header>
    // </div>
  );
};
