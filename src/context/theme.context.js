import React, { createContext, useState } from "react";
import theme from '../assets/js/theme'

export const ThemeContext = createContext("lightTheme");

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("lightTheme");

  const value = { themeMode };
  const costumTheme = theme[themeMode];

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;