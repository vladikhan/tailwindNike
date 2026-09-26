import { useEffect, useState } from "react"

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem("isDarkMode") === "true";
    } catch {
      return false; // Safari private mode / storage disabled
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggle = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("isDarkMode", String(next));
      } catch {
        // Ignore error if localStorage is unavailable (e.g., Safari private mode)
      }
      return next;
    });
  };

  return [isDarkMode, toggle] as const;
}
