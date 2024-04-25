import { createContext } from "react";

export enum Themes {
  DARK = "dark",
  LIGHT = "light",
}

export interface ThemeContextProps {
  theme?: Themes;
  setTheme?: React.Dispatch<React.SetStateAction<Themes>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LS_APP_THEME = "theme";
