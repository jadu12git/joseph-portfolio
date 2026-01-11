import React, { createContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext(null);

function getTimeTheme() {
  const hour = new Date().getHours();
  // Light: 7am–6:59pm, Dark otherwise
  return hour >= 7 && hour < 19 ? "light" : "dark";
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [mode, setMode] = useState("auto"); // auto | manual

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    const savedTheme = localStorage.getItem("themeValue");

    if (savedMode === "manual" && (savedTheme === "light" || savedTheme === "dark")) {
      setMode("manual");
      setTheme(savedTheme);
    } else {
      setMode("auto");
      setTheme(getTimeTheme());
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Keep auto theme updated (if user stays on page across time)
  useEffect(() => {
    if (mode !== "auto") return;
    const id = setInterval(() => setTheme(getTimeTheme()), 60 * 1000);
    return () => clearInterval(id);
  }, [mode]);

  const api = useMemo(() => {
    const toggle = () => {
      const next = theme === "dark" ? "light" : "dark";
      setMode("manual");
      setTheme(next);
      localStorage.setItem("themeMode", "manual");
      localStorage.setItem("themeValue", next);
    };

    const setAuto = () => {
      setMode("auto");
      localStorage.setItem("themeMode", "auto");
      localStorage.removeItem("themeValue");
      setTheme(getTimeTheme());
    };

    return { theme, mode, toggle, setAuto };
  }, [theme]);

  return <ThemeContext.Provider value={api}>{children}</ThemeContext.Provider>;
}
