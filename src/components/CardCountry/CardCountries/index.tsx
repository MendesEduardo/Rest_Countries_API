import React from 'react'
import { Link } from 'react-router-dom';
import countries from '../../../data/data.json';
import styles from './CardCountries.module.scss';

type Props = typeof countries[0];

export default function CardCountries(props: Props) {
    const { name, flags, population, region, capital } = props;

    return (
        <Link to={`/${name}`} className={styles.cardCountries}>
            <div className={styles.cardCountries__image}>
                <img src={flags.png} alt={name} />
            </div>
            <div className={styles.cardCountries__initialDescription}>
                <h4>{name}</h4>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>capital: {capital}</p>
            </div>
        </Link >
    )
}
