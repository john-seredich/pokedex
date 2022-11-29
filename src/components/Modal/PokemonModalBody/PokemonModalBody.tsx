import {
  biography,
  pokemonStats,
  trainingData,
} from "../../../test_data/tableTestData";
import SectionHeader from "../../SectionHeader/SectionHeader";
import Table from "../../Table/Table";
import styles from "./PokemonModalBody.module.scss";

interface Props {
  data: any;
  pokemonNumber: string;
  pokemonName: string;
  pokemonImg: string;
  pokemonSpeciesInfo: string;
  pokemonColor: string;
  pokemonTypes: any;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Fix POSITION STYLES TOMORROW

function PokemonModalBody(props: Props) {
  const pokemonColorStyle = styles[props.pokemonColor];
  return (
    <>
      <div className={styles.backdrop}></div>
      <div
        className={`${styles.modal} ${pokemonColorStyle}`}
        onClick={() => props.setIsOpen(false)}
      >
        <div className={`${styles.modal__header} ${pokemonColorStyle}`}>
          <div className={styles.modal__header_container}>
            <p className={styles.modal__header_num}>#{props.pokemonNumber}</p>
            <h2 className={styles.modal__header_name}>{props.pokemonName}</h2>
          </div>
          <img src={props.pokemonImg} alt={props.pokemonName} />
        </div>
        <div className={styles.modal__data}>
          <div className={styles.modal__data_header}>
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

          <div className={styles.section}>
            <SectionHeader
              color={props.pokemonColor}
              text="Information"
              width="64px"
            />
            <Table data={biography} />
          </div>
          <div className={styles.section}>
            <SectionHeader
              color={props.pokemonColor}
              text="Training"
              width="64px"
            />
            <Table data={trainingData} />
          </div>
          <div className={styles.section}>
            <SectionHeader
              color={props.pokemonColor}
              text="Base Stats"
              width="83px"
            />
            <Table data={pokemonStats} />
          </div>
          {/* <div className={styles.section}>
            <SectionHeader
              color={props.pokemonColor}
              text="Evolutions"
              width="83px"
            />
            <Evolutions pokemonImg={props.pokemonImg} />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default PokemonModalBody;
