import { useState, useEffect } from 'react'
import countries from '../../data/data.json';
import CardCountries from './CardCountries';

interface Props {
  search: string
}

export default function CardCountry(props: Props) {
  const [list, setList] = useState(countries);
  const { search } = props;

  const requestSearch = (name: string) => {
    const regex = new RegExp(search, 'i');
    return regex.test(name);
  }

  useEffect(() => {
    const novaLista = countries.filter(item => requestSearch(item.name));
    setList(novaLista);
  }, [search]);

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
