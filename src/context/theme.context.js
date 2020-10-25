import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContext = ({ children }) => {
  const [themeMode, setThemeMode] = useState("lightTheme");

  const value = { themeMode };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;