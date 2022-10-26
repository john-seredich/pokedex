import { useState } from "react";
import styles from "./Search.module.scss";

function Search() {
  const [enteredText, setEnteredText] = useState("");

  return (
    <div className={styles.input}>
      <input
        type="search"
        placeholder="Search Pokémon..."
        value={enteredText}
        onChange={(e) => setEnteredText(e.target.value)}
      />
    </div>
  );
}

export default Search;
