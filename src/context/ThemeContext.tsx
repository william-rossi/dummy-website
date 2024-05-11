'use client'

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import CookieHandlers from '@/Helpers/cookieHandlers';

export type themeType = 'light' | 'light-soft' | 'dark' | 'dark-blue' | 'dracula' | 'neon' | 'neon-up' | 'vintage' | 'vintage-up';

export type fontType = 'default' | 'monospace' | 'sans-serif' | 'cursive' | 'math' | 'system-ui';

export const themesMap: themeType[] = ['light', 'light-soft', 'dark', 'dark-blue', 'dracula', 'neon', 'neon-up', 'vintage', 'vintage-up'];
export const fontsMap: fontType[] = ['default', 'monospace', 'sans-serif', 'cursive', 'math', 'system-ui'];

interface ThemeProps {
  children: ReactNode;
}

interface ThemeContextValuesProps {
  theme: themeType;
  font: fontType;
  setTheme: Dispatch<SetStateAction<themeType>>;
  setFont: Dispatch<SetStateAction<fontType>>;
}

const context = createContext<ThemeContextValuesProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProps> = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<themeType>('light');
  const [font, setFont] = useState<fontType>('default');

  useEffect(() => {
    const storedThemeString = CookieHandlers.getCookie('theme');
    const storedFontString = CookieHandlers.getCookie('font');

    if (storedThemeString) {
      const parsedTheme = JSON.parse(storedThemeString) as themeType;
      setTheme(parsedTheme);
    }

    if (storedFontString) {
      const parsedFont = JSON.parse(storedFontString) as fontType;
      setFont(parsedFont);
    }
  }, []);

  useEffect(() => {
    CookieHandlers.setCookie('theme', JSON.stringify(theme), 7);

    document.getElementsByTagName("body")[0].className = theme;

  }, [theme]);

  useEffect(() => {
    CookieHandlers.setCookie('font', JSON.stringify(font), 7);

    if (font !== 'default')
      document.getElementsByTagName("body")[0].style.fontFamily = font;
    else
      document.getElementsByTagName("body")[0].style.fontFamily = "";
  }, [font])

  const contextValue: ThemeContextValuesProps = {
    theme,
    font,
    setTheme,
    setFont
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export const useTheme = (): ThemeContextValuesProps => {
  const ctx = useContext(context);

  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return ctx;
};