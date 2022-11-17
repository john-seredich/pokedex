import ReactDOM from "react-dom";
import Modal from "../Modal/Modal";

interface Props {
  data: any;
  pokemonNumber: string;
  pokemonName: string;
  pokemonImg: string;
  pokemonColor: string;
  pokemonTypes: any;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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
