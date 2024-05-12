'use client'

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import CookieHandlers from '@/Helpers/cookieHandlers';
import { fontType } from '@/Helpers/fontTypes';
import { themeType } from '@/Helpers/themeTypes';

interface ThemeProps {
  children: ReactNode;
}

interface ThemeContextValuesProps {
  theme: themeType;
  font: fontType;
  logoUrl: string;
  setTheme: Dispatch<SetStateAction<themeType>>;
  setFont: Dispatch<SetStateAction<fontType>>;
  setLogoUrl: Dispatch<SetStateAction<string>>
}

const context = createContext<ThemeContextValuesProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProps> = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<themeType>('light');
  const [font, setFont] = useState<fontType>('default');
  const [logoUrl, setLogoUrl] = useState<string>("");

  useEffect(() => {
    const storedThemeString = CookieHandlers.getCookie('theme');
    const storedFontString = CookieHandlers.getCookie('font');
    const storedLogoString = CookieHandlers.getCookie('logoUrl');

    if (storedThemeString)
      setTheme(storedThemeString as themeType)

    if (storedFontString)
      setFont(storedFontString as fontType)

    if (storedLogoString)
      setLogoUrl(storedLogoString)
  }, []);

  useEffect(() => {
    CookieHandlers.setCookie('theme', theme, 7);

    document.getElementsByTagName("body")[0].className = theme;
  }, [theme]);

  useEffect(() => {
    CookieHandlers.setCookie('font', font, 7);

    if (font !== 'default')
      document.getElementsByTagName("body")[0].style.fontFamily = font;
    else
      document.getElementsByTagName("body")[0].style.fontFamily = "";
  }, [font])

  useEffect(() => {
    CookieHandlers.setCookie('logoUrl', logoUrl, 7);
  }, [logoUrl])

  const contextValue: ThemeContextValuesProps = {
    theme,
    font,
    logoUrl,
    setTheme,
    setFont,
    setLogoUrl
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