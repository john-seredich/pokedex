import { useState, useEffect } from "react";
import { setIsSearchingType } from "../../shared/types/search.type";
import styles from "./Search.module.scss";

function Search(props: setIsSearchingType) {
  const [enteredText, setEnteredText] = useState("");

  useEffect(() => {
    if (enteredText.length >= 1) {
      props.setIsSearching(true);
    } else {
      props.setIsSearching(false);
    }
  }, [props, enteredText.length]);

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
