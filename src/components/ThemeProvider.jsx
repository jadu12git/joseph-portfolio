import React, { createContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext(null);

function getTimeBasedTheme() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? "light" : "dark";
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [mode, setMode] = useState("auto"); // "auto" | "manual"

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    const savedTheme = localStorage.getItem("themeValue");

    if (savedMode === "manual" && (savedTheme === "light" || savedTheme === "dark")) {
      setMode("manual");
      setTheme(savedTheme);
      return;
    }

    // Default: auto by time
    setMode("auto");
    setTheme(getTimeBasedTheme());
  }, []);

  // Update auto theme on the hour (light/dark flip if user stays on page)
  useEffect(() => {
    if (mode !== "auto") return;

    const tick = () => setTheme(getTimeBasedTheme());
    const interval = setInterval(tick, 60 * 1000); // every minute is fine
    return () => clearInterval(interval);
  }, [mode]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(() => {
    const setAuto = () => {
      setMode("auto");
      localStorage.setItem("themeMode", "auto");
      localStorage.removeItem("themeValue");
      setTheme(getTimeBasedTheme());
    };

    const toggleManual = () => {
      const next = theme === "dark" ? "light" : "dark";
      setMode("manual");
      setTheme(next);
      localStorage.setItem("themeMode", "manual");
      localStorage.setItem("themeValue", next);
    };

    return { theme, mode, setAuto, toggleManual };
  }, [theme, mode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
