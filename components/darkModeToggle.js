import React from "react";
import { useState, useEffect } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import styles from "../styles/darkModeToggle.module.scss";

export const DarkModeToggle = () => {
  const [isToggled, setisToggled] = useState(false);
  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {}, []);
  return (
    <div>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={darkMode.value}
          onChange={darkMode.toggle}
        />
        <span className={styles.switch__slider} />
      </label>
      <button onClick={darkMode.enable}>
        <BiMoon />
      </button>
      <button onClick={darkMode.disable}>
        <BiSun />
      </button>
    </div>
  );
};
