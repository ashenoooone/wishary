'use client';

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(
  null
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useTheme must be used within a ThemeProvider'
    );
  }
  return context;
};

const LOCAL_STORAGE_KEY = 'theme';

export const ThemeProvider = ({
  children,
}: PropsWithChildren) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => {
      if (typeof window !== 'undefined' && localStorage) {
        const storedTheme = localStorage.getItem(
          LOCAL_STORAGE_KEY
        );
        return storedTheme
          ? JSON.parse(storedTheme)
          : 'light';
      }
      return 'light';
    }
  );

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) =>
      prevTheme === 'light' ? 'dark' : 'light'
    );
  }, []);

  const value = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const WithTheme = ({
  children,
  className,
}: { className?: string } & PropsWithChildren) => {
  const { theme } = useTheme();

  return (
    <html className={theme}>
      <body
        className={`antialiased ${className} flex gap-10 px-4 py-2`}
      >
        {children}
      </body>
    </html>
  );
};
