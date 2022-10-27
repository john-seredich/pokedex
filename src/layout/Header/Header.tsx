import Search from "../../components/Search/Search";
import { setIsSearchingType } from "../../shared/types/search.type";
import styles from "./Header.module.scss";

function Header(props: setIsSearchingType) {
  return (
    <>
      <h1 className={styles.header__title}>Pokédex</h1>
      <Search setIsSearching={props.setIsSearching} />
    </>
  );
}

export default Header;
