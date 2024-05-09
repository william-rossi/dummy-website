'use client'

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import CookieHandlers from '@/Helpers/cookieHandlers';

type themeType = 'light' | 'dark' | 'dracula';

export const themesMap: themeType[] = ['light', 'dark', 'dracula'];

interface IThemeProps {
  children: ReactNode;
}

interface IThemeContextValues {
  themeContext: themeType;
  setThemeContext: Dispatch<SetStateAction<themeType>>;
}

const context = createContext<IThemeContextValues | undefined>(undefined);

export const ThemeProvider: React.FC<IThemeProps> = ({ children }: IThemeProps) => {
  const [themeContext, setThemeContext] = useState<themeType>('light'); // Inicialize com 'light' no servidor

  useEffect(() => {
    const storedThemeString = CookieHandlers.getCookie('theme');
    if (storedThemeString) {
      const parsedTheme = JSON.parse(storedThemeString) as themeType;
      setThemeContext(parsedTheme); // Atualize o tema no cliente após a renderização
    }
  }, []); // Executar apenas uma vez no cliente após a montagem

  useEffect(() => {
    // Atualize a cookie com o novo valor do tema
    CookieHandlers.setCookie('theme', JSON.stringify(themeContext), 7);
  }, [themeContext]); // Executar sempre que o temaContexto mudar

  const contextValue: IThemeContextValues = {
    themeContext,
    setThemeContext,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export const useThemeContext = (): IThemeContextValues => {
  const ctx = useContext(context);

  if (!ctx) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return ctx;
};