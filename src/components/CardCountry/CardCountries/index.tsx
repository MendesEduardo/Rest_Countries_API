import { Link } from 'react-router-dom';
import { useContext } from 'react';
import countries from '../../../data/data.json';
import styles from './CardCountries.module.scss';
import { ThemeContext } from '../../../Context/ThemeContext';

type Props = typeof countries[0];

export default function CardCountries(props: Props) {
  const { name, flags, population, region, capital } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      to={`/${name}`}
      className={`${styles.cardCountries} ${theme === 'light' ? '' : styles.themeCard}`}
    >
      <div className={styles.cardCountries__image}>
        <img
          src={flags.png}
          alt={name}
          style={{ width: '270px', height: '150px', borderRadius: '4px 4px 0 0' }}
        />
      </div>
      <div className={styles.cardCountries__initialDescription}>
        <h4>{name}</h4>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>capital:</span> {capital}
        </p>
      </div>
    </Link>
  );
}
