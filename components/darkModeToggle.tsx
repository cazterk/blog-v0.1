import React, { useEffect, useState } from "react";

import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";

import styles from "../styles/darkModeToggle.module.scss";

export const DarkModeToggle = () => {
  const [themeMode, setThemeMode] = useState(undefined);

  const handleToggle = (event) => {
    setThemeMode(event.target.checked);
  };

  useEffect(() => {
    if (themeMode !== undefined) {
      if (themeMode) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [themeMode]);

  useEffect(() => {
    const root = document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    setThemeMode(initialColorValue === "dark ");
  }, []);

  return (
    <div className={styles.toggle}>
      <label htmlFor="light">
        {" "}
        <FiSun />
      </label>
      {themeMode !== undefined && (
        <label className={styles.switch}>
          <input type="checkbox" checked={themeMode} onChange={handleToggle} />
          <span className={styles.switch__slider} />
        </label>
      )}
      <label htmlFor="dark">
        <BiMoon />
      </label>
    </div>
  );
};
