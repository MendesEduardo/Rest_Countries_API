import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../Themes';
import FilterCountries from '../../components/FilterCountries';
import SearchEngine from '../../components/SearchEngine'
import { GlobalStyles } from '../../style/GlobalStyles';
import CardCountries from '../../components/CardCountry';
import Container from '../../components/Container';

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null)
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>X-X</button>
        <SearchEngine search={search} setSearch={setSearch} />
        <FilterCountries filter={filter} setFilter={setFilter} />
        <CardCountries search={search} filter={filter} />
      </Container>
    </ThemeProvider>
  )
}
