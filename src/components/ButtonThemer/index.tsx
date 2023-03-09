import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

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
        <button onClick={handleToggleTheme}>
            Dark mode
        </button>
    );
}
