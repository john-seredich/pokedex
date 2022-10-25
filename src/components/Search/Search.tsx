import styles from "./Search.module.scss";

function Search() {
  return (
    <div className={styles.input}>
      <input type="search" placeholder="Search Pokémon..." />
    </div>
  );
}

export default Search;
