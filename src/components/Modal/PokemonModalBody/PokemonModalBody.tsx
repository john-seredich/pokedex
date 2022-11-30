import { pokemonDataProps } from "../../../shared/interfaces/pokemonDataProps.interface";
import {
  biography,
  pokemonStats,
  trainingData,
} from "../../../test_data/tableTestData";
import SectionHeader from "../../SectionHeader/SectionHeader";
import Table from "../../Table/Table";
import PokemonModalHeader from "../PokemonModalHeader/PokemonModalHeader";
import styles from "./PokemonModalBody.module.scss";

function PokemonModalBody(props: pokemonDataProps) {
  const pokemonColorStyle = styles[props.pokemonColor];
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={`${styles.modal}`} onClick={() => props.setIsOpen(false)}>
        <PokemonModalHeader {...props} />
        <div className={styles.modal__data}>
          <div className={styles.modal__data_about}>
            <SectionHeader
              color={props.pokemonColor}
              text="About"
              width="49px"
            />
            <p>
              This legendary ice Pokémon waits for a hero to fill in the missing
              parts of its body with truth or ideals.
            </p>
            <div className={styles.modal__data_types}>{props.pokemonTypes}</div>
          </div>

          <div>
            <SectionHeader
              color={props.pokemonColor}
              text="Information"
              width="64px"
            />
            <Table data={biography} />
          </div>
          <div>
            <SectionHeader
              color={props.pokemonColor}
              text="Training"
              width="64px"
            />
            <Table data={trainingData} />
          </div>
          <div>
            <SectionHeader
              color={props.pokemonColor}
              text="Base Stats"
              width="83px"
            />
            <Table data={pokemonStats} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonModalBody;
