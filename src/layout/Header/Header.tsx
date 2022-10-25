import Search from "../../components/Search/Search";
import styles from "./Header.module.scss";

function Header() {
  return (
    <>
      <h1 className={styles.header__title}>Pokédex</h1>
      <Search />
    </>
  );
}

export default Header;
