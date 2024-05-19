import { useState } from "react";
import styles from "./SearchBar.module.css";
import { UilSearchAlt } from "@iconscout/react-unicons";

export function SearchBar({ onSearch }) {
  const [searchItem, setSearchItem] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    onSearch(searchTerm);
  };

  const handleSearchBarClick = () => {
    setIsActive(true);
  };

  const handleInputBlur = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchBarInput}
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
        onClick={handleSearchBarClick}
        onBlur={handleInputBlur}
      />
      {!isActive && <UilSearchAlt className={styles.searchIcon} />}
    </div>
  );
}
