import { useState } from 'react'
import FilterCountries from '../../components/FilterCountries';
import SearchEngine from '../../components/SearchEngine'
import CardCountries from '../../components/CardCountry';
import Container from '../../components/Container';
import styles from './Home.module.scss';

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null)

  return (
      <Container>
        <main className={styles.home}>
          <section className={styles.home__seekers}>
            <SearchEngine search={search} setSearch={setSearch} />
            <FilterCountries filter={filter} setFilter={setFilter} />
          </section>
          <CardCountries search={search} filter={filter} />
        </main>
      </Container>
  )
}
