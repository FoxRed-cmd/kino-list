import { FC, ReactElement, useMemo, useState } from "react";
import {
  LS_APP_THEME,
  ThemeContext,
  ThemeContextProps,
  Themes,
} from "../lib/ThemeContext";

type Props = {
  children: ReactElement;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(
    (localStorage.getItem(LS_APP_THEME) as Themes) || Themes.LIGHT
  );

  const defaultProps = useMemo((): ThemeContextProps => {
    return {
      theme: theme,
      setTheme: setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
