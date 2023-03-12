import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { BsMoon, BsMoonFill } from 'react-icons/bs';
import styles from './ButtonThemer.module.scss';

export default function ButtonThemer() {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleToggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <button
            className={styles.buttonThemer}
            onClick={handleToggleTheme}>
            {theme === 'light' ? (
                <BsMoon size={20} />
            ) : (
                <BsMoonFill size={20} />
            )}
            Dark Mode
        </button>
    );
}
