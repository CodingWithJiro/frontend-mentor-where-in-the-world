import { useState, useEffect } from "react";
import ThemeIcon from "./ThemeIcon";
import ThemeButton from "./ThemeButton";

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    const isDarkTheme = theme === "dark";
    if (isDarkTheme) {
      root.classList.add("dark");
    }
    return () => {
      root.classList.remove("dark");
    };
  }, [theme]);
  useEffect(() => {
    const root = document.documentElement;
    root.style.colorScheme = theme;
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="absolute top-4 right-4 flex items-center justify-center gap-2 rounded-full bg-transparent px-4 py-2 shadow-(--BOX-SHADOW-THEME) motion-safe:transition-shadow motion-safe:duration-300 motion-safe:ease-in-out md:top-13 md:right-13">
      <ThemeIcon theme={theme} />
      <ThemeButton onThemeChange={handleThemeChange} theme={theme} />
    </div>
  );
};

export default Theme;
