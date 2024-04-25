import { useContext } from "react";
import {
  LS_APP_THEME,
  ThemeContext,
  Themes,
} from "../lib/ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Themes;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (setTheme && theme) {
      const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
      setTheme(newTheme);
      localStorage.setItem(LS_APP_THEME, newTheme);
    }
  };

  return { toggleTheme: toggleTheme, theme: theme as Themes };
}
