import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../Themes';
import FilterCountries from '../../components/FilterCountries';
import SearchEngine from '../../components/SearchEngine'
import { GlobalStyles } from '../../style/GlobalStyles';

export default function Home() {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>X-X</button>
      <SearchEngine search={search} setSearch={setSearch} />
      Hello world!
      <FilterCountries />
    </ThemeProvider>
  )
}
