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
        </div>
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
