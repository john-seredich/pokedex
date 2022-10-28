import styles from "./Search.module.scss";
import { EnteredText } from "../../shared/interfaces/entered.interface";

function Search(props: EnteredText) {
  return (
    <div className={styles.input}>
      <input
        type="search"
        placeholder="Search Pokémon..."
        value={props.enteredText}
        onChange={(e) => {
          props.setEnteredText(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
