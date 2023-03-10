import classNames from 'classnames';
import { useState, useContext } from "react";
import countries from '../../data/data.json';
import styles from './FilterCountries.module.scss';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { ThemeContext } from '../../Context/ThemeContext';

interface Props {
    filter: string | null;
    setFilter: React.Dispatch<React.SetStateAction<string | null>>
}

export default function FilterCountries({ filter, setFilter }: Props) {
    const [open, setOpen] = useState(false);
    const allRegions = [...new Set(countries.map((item) => item.region))];
    const selectRegion = filter && allRegions.find(region => region === filter);
    const { theme } = useContext(ThemeContext);

    type nameCoutries = typeof allRegions[0];

    const selectFilter = (selec: nameCoutries) => {
        if (filter === selec)
            return setFilter(null);
        return setFilter(selec);
    }

    return (
        <button className={classNames({
            [styles.filterCountries]: true,
            [styles["themeFilter"]]: theme === 'light' ? '' : 'dark',
            [styles["filterCountries__ordenador--active"]]: filter !== ""
        })}
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}>
            <span>{selectRegion || "Filter by region"}</span>
            {open ? (
                <MdKeyboardArrowUp size={20} />
            ) : (
                <MdKeyboardArrowDown size={20} />
            )}
            <div className={classNames({
                [styles.filterCountries__options]: true,
                [styles["filterCountries__options--active"]]: open,
            })}>
                {allRegions.map((region) => (
                    <div
                        className={classNames({
                            [styles.filterCountries__option]: true,
                            [styles["themeFilter"]]: theme === 'light' ? '' : 'dark',
                        })}
                        key={region}
                        onClick={() => selectFilter(region)}>
                        {region}
                    </div>
                ))}
            </div>
        </button>
    )
};