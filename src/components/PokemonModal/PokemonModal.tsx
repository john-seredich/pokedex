import ReactDOM from "react-dom";
import styles from "./PokemonModal.module.scss";

interface Props {
  data: any;
  pokemonNumber: string;
  pokemonName: string;
  pokemonImg: string;
  pokemonColor: string;
  pokemonTypes: any;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = (props: Props) => {
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
        <table className={styles.modal__table}>
          <tr>
            <th>Height</th>
            <td>0.90m</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>15.2lbs</td>
          </tr>
          <tr>
            <th>Category</th>
            <td>Seed</td>
          </tr>
          <tr>
            <th>Abilities</th>
            <td>Overgrowth, Chlorophyll</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

function PokemonModal(props: Props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal {...props} />,
        document.getElementById("modal-root")!
      )}
    </>
  );
}

export default PokemonModal;
