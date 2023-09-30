import React, { createContext } from 'react';
import { theme } from './theme';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

function ThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
