import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}> home</div>
      <div onClick={() => (window.location.href = "#")}>link 1</div>
      <div onClick={() => (window.location.href = "#")}>link 2</div>
    </div>
  );
};
