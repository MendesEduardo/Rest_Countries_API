import { useState, useEffect } from 'react'
import countries from '../../data/data.json';
import CardCountries from './CardCountries';

interface Props {
  search: string,
  filter: string | null
}

export default function CardCountry(props: Props) {
  const [list, setList] = useState(countries);
  const { search, filter } = props;

  const requestSearch = (name: string) => {
    const regex = new RegExp(search, 'i');
    return regex.test(name);
  }

  const requestFilter = (id: string) => {
    if (filter !== null)
    return filter === id;
    return true;
  }

  useEffect(() => {
    const novaLista = countries.filter(item => requestSearch(item.name) && requestFilter(item.region));
    setList(novaLista);
  }, [search, filter]);

  return (
    <section>
      {list.map((item) => (
        <CardCountries
          key={item.alpha2Code}
          {...item}
        />
      ))}
    </section>
  )
}
