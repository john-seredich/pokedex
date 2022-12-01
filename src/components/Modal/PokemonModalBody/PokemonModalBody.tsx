import { pokemonDataProps } from "../../../shared/interfaces/pokemonDataProps.interface";
import PokemonModalData from "../PokemonModalData/PokemonModalData";
import PokemonModalHeader from "../PokemonModalHeader/PokemonModalHeader";
import styles from "./PokemonModalBody.module.scss";

function PokemonModalBody(props: pokemonDataProps) {
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={`${styles.modal}`} onClick={() => props.setIsOpen(false)}>
        <PokemonModalHeader {...props} />
        <PokemonModalData {...props} />
      </div>
    </>
  );
}

export default PokemonModalBody;
