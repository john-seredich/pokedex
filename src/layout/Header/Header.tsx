import Search from "../../components/Search/Search";
import styles from "./Header.module.scss";
import { EnteredText } from "../../shared/interfaces/entered.interface";

function Header(props: EnteredText) {
  return (
    <>
      <h1 className={styles.header__title}>Pokéindex</h1>
      <Search
        enteredText={props.enteredText}
        setEnteredText={props.setEnteredText}
      />
    </>
  );
}

export default Header;
