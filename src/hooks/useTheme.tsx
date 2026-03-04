import { useState, useEffect } from 'react';
import type { ThemeMode } from '../types/theme';

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    const isDarkTheme = theme === 'dark';
    if (isDarkTheme) {
      root.classList.add('dark');
    }
    return () => {
      root.classList.remove('dark');
    };
  }, [theme]);
  useEffect(() => {
    const root = document.documentElement;
    root.style.colorScheme = theme;
  }, [theme]);
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, handleThemeChange };
};

export default useTheme;
