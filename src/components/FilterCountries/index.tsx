import React from 'react';
import countries from '../../data/data.json';
import styles from './FilterCountries.module.scss';

export default function FilterCountries() {
    const allRegions = [...new Set(countries.map((item) => item.region))];

    
    return (
        <div className={styles.filterCountries}>
            {allRegions.map((region) => (
                <button key={region}>
                    {region}
                </button>
            ))}
        </div>
    )
};