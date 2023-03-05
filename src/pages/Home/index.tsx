import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../Themes';
import FilterCountries from '../../components/FilterCountries';
import SearchEngine from '../../components/SearchEngine'
import { GlobalStyles } from '../../style/GlobalStyles';
import CardCountries from '../../components/CardCountry';
import Container from '../../components/Container';
import styles from './Home.module.scss';

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null)
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <section className={styles.home}>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>X-X</button>
          <div className={styles.home__seekers}>
            <SearchEngine search={search} setSearch={setSearch} />
            <FilterCountries filter={filter} setFilter={setFilter} />
          </div>
          <CardCountries search={search} filter={filter} />
        </section>
      </Container>
    </ThemeProvider>
  )
}
