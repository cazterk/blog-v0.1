import React from "react";
import { useState, useEffect } from "react";

import useDarkMode from "use-dark-mode";

import styles from "../styles/darkModeToggle.module.scss";

export const DarkModeToggle = () => {
  const darkMode = useDarkMode();
  // const theme = darkMode.value ? darkTheme : lightTheme;

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
    </div>
  );
};
