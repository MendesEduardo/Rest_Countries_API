import { createContext, useState } from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: '',
  setTheme: () => { },
});

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<string>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <body className={theme}>
        {children}
      </body>
    </ThemeContext.Provider>
  );
}
