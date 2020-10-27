import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

const ThemeSwitcher = () => {
  const { themeMode } = useContext(ThemeContext);
  console.log("THEME MODE: ", themeMode);
  return <div></div>;
};

export default ThemeSwitcher;