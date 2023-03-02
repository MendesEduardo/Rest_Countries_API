import React from "react";
import { GoSearch } from "react-icons/go";
import styles from "./SearchEngine.module.scss";

interface SearchEngineProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchEngine({ search, setSearch }: SearchEngineProps) {
    return (
        <div className={styles.searchEngine}>
            <GoSearch size={25} color="#858585" />
            <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search for a country..."
            />
        </div>
    );
}