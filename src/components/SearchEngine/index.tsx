import { useContext } from "react";
import { GoSearch } from "react-icons/go";
import { ThemeContext } from "../../Context/ThemeContext";
import styles from "./SearchEngine.module.scss";

interface SearchEngineProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchEngine({ search, setSearch }: SearchEngineProps) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${styles.searchEngine} ${theme === 'light' ? '' : styles.themeInput}`}>
            <GoSearch size={20} className={styles.searchEngine__icon} />
            <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search for a country..."
            />
        </div>
    );
}