import React from "react";
import { ReactComponent as SearchSVG } from '../../assets/svg/search.svg';
import styles from "./Searchbar.module.scss";

interface SearchbarProps {}

function Searchbar({}: SearchbarProps) {
  return <div className={styles.searchbar}>
    <input type="text" className={styles.searchbar__input}/>
    <button className={styles.searchbar__submit_button}>
      <SearchSVG />
      Search
    </button>
  </div>;
}

export default Searchbar;
