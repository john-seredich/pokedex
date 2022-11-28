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

  const pokemonStats = [
    {
      heading: "Hp",
      body: "125",
    },
    {
      heading: "Attack",
      body: "120",
    },
    {
      heading: "Defense",
      body: "90",
    },
    {
      heading: "Sp.Atk",
      body: "170",
    },
    {
      heading: "Sp.Def",
      body: "170",
    },
    {
      heading: "Speed",
      body: "170",
    },
  ];

  //   <div
  //   className={`${styles.modal} ${styles[props.pokemonColor]}`}
  //   onClick={() => props.setIsOpen(false)}
  // >

  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={`${styles.modal}`} onClick={() => props.setIsOpen(false)}>
        <div className={styles.modal__header}>
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
            <Table data={data} />
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

export default Modal;
