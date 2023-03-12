import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';
import styles from './ButtonLink.module.scss';

interface Props {
    to?: string;
    children: string |  React.ReactNode
}

export default function ButtonLink({ to = '', children }: Props) {
    const { theme } = useContext(ThemeContext);

    return (
        <button className={`${styles.buttonLink} ${theme === 'light' ? '' : styles.themeButtonLink}`}>
            <Link
                className={styles.buttonLink__link}
                to={to}>
                {children}
            </Link>
        </button>
    )
}
