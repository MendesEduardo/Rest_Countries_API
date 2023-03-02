import React from 'react'
import countries from '../../../data/data.json';
import styles from './CardCountries.module.scss';

type Props = typeof countries[0];

export default function CardCountries(props: Props) {
    const { name, flags, population, region, capital } = props;

    return (
        <article className={styles.cardCountries}>
            <img src={flags.svg} alt={name} />
            <div className={styles.cardCountries__initialDescription}>
                <h4>{name}</h4>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>capital: {capital}</p>
            </div>
        </article>
    )
}
