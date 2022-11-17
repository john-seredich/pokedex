import Table from "../Table/Table";
import styles from "./Modal.module.scss";

interface Props {
  data: any;
  pokemonNumber: string;
  pokemonName: string;
  pokemonImg: string;
  pokemonColor: string;
  pokemonTypes: any;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const pokemonInfo = {
  height: "",
  weight: "",
  category: "",
  abilities: "",
  baseExp: "",
  baseHappiness: "",
  catchRate: "",
  growthRate: "",
};

const pokemonStats = {
  hp: 1,
  attack: 1,
  defense: 1,
  spAtk: 1,
  spDef: 1,
  speed: 1,
  total: 1,
};

const data = [
  {
    heading: "Height",
    body: "0.90m",
  },
  {
    heading: "Weight",
    body: "0.90m",
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

function Modal(props: Props) {
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
          <h2>About</h2>
          <div
            className={`${styles.modal__data_header_bar} ${
              styles[props.pokemonColor]
            }`}
          ></div>
          <p>
            This legendary ice Pokémon waits for a hero to fill in the missing
            parts of its body with truth or ideals.
          </p>
          <div className={styles.modal__data_types}>{props.pokemonTypes}</div>
        </div>
        <Table data={data} />
      </div>
    </div>
  );
}

export default Modal;
