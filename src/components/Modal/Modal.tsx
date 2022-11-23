import Evolutions from "../Evolutions/Evolutions";
import PokemonBaseStats from "../PokemonBaseStats/PokemonBaseStats";
import SectionHeader from "../SectionHeader/SectionHeader";
import Table from "../Table/Table";
import styles from "./Modal.module.scss";

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

function Modal(props: Props) {
  const data = [
    {
      heading: "Height",
      body: "0.70m",
    },
    {
      heading: "Weight",
      body: "15.2lbs",
    },
    {
      heading: "Category",
      body: "Seed",
    },
    {
      heading: "Abilities",
      body: "Overgrowth, Chlorophyll",
    },
  ];

  const trainingData = [
    {
      heading: "Base Exp",
      body: "64",
    },
    {
      heading: "Base Happiness",
      body: "50",
    },
    {
      heading: "Catch Rate",
      body: "45",
    },
    {
      heading: "Growth Rate",
      body: "Medium-slow",
    },
  ];

  return (
    <div
      className={`${styles.modal} ${styles[props.pokemonColor]}`}
      onClick={() => props.setIsOpen(false)}
    >
      <div className={styles.modal__header}>
        <div className={styles.modal__header_container}>
          <p className={styles.modal__header_num}>#{props.pokemonNumber}</p>
          <h2 className={styles.modal__header_name}>{props.pokemonName}</h2>
        </div>
        <img src={props.pokemonImg} alt={props.pokemonName} />
      </div>
      <div className={styles.modal__data}>
        <div className={styles.modal__data_header}>
          <SectionHeader color={props.pokemonColor} text="About" width="49px" />
          <p>
            This legendary ice Pokémon waits for a hero to fill in the missing
            parts of its body with truth or ideals.
          </p>
          <div className={styles.modal__data_types}>{props.pokemonTypes}</div>
        </div>
        <>
          <Table data={data} />
        </>
        <>
          <SectionHeader
            color={props.pokemonColor}
            text="Training"
            width="64px"
          />
          <Table data={trainingData} />
        </>
        <>
          <SectionHeader
            color={props.pokemonColor}
            text="Base Stats"
            width="83px"
          />
          <PokemonBaseStats pokemonColor={props.pokemonColor} />
        </>
        <>
          <SectionHeader
            color={props.pokemonColor}
            text="Evolutions"
            width="83px"
          />
          <Evolutions pokemonImg={props.pokemonImg} />
        </>
      </div>
    </div>
  );
}

export default Modal;
