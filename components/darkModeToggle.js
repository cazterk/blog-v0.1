import React from "react";
import { useState, useEffect } from "react";

import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import styles from "../styles/darkModeToggle.module.scss";

export const DarkModeToggle = ({ isToggled, onToggle }) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isToggled}
          onChange={onToggle}
          onclick={onToggle}
        />
        <span className={styles.switch__slider} />
      </label>
      <button onClick={darkMode.enable}>DARK MODE</button>
      <button onClick={darkMode.disable}>LIGHT MODE</button>
    </div>
  );
};
