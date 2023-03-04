import classNames from 'classnames';
import React from 'react';
import countries from '../../data/data.json';
import styles from './FilterCountries.module.scss';

interface Props {
    filter: string | null;
    setFilter: React.Dispatch<React.SetStateAction<string | null>>
}

export default function FilterCountries({ filter, setFilter }: Props) {
    const allRegions = [...new Set(countries.map((item) => item.region))];
    type nameCoutries = typeof allRegions[0];
    const selectFilter = (selec: nameCoutries) => {
        if (filter === selec)
            return setFilter(null);
        return setFilter(selec);
    }


    return (
        <div className={styles.filterCountries}>
            {allRegions.map((region) => (
                <button
                    key={region}
                    className={classNames({
                        [styles.filterCountries__filter]: true,
                        [styles['filterCountries__filter--active']]: filter === region
                    })}
                    onClick={() => selectFilter(region)}>
                    {region}
                </button>
            ))}
        </div>
    )
};