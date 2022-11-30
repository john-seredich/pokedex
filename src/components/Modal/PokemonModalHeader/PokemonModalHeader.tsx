import styles from "./PokemonModalHeader.module.scss";

interface Props {
  pokemonColor: string;
  pokemonNumber: string;
  pokemonName: string;
  pokemonImg: string;
}

function PokemonModalHeader(props: Props) {
  return (
    <div className={`${styles.header} ${styles[props.pokemonColor]}`}>
      <div>
        <p className={styles.header__num}>#{props.pokemonNumber}</p>
        <h2 className={styles.header__name}>{props.pokemonName}</h2>
      </div>
      <img src={props.pokemonImg} alt={props.pokemonName} />
    </div>
  );
}

export default PokemonModalHeader;
