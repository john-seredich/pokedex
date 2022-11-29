import ReactDOM from "react-dom";
import PokemonModalBody from "../PokemonModalBody/PokemonModalBody";

interface Props {
  data: any;
  pokemonNumber: string;
  pokemonName: string;
  pokemonImg: string;
  pokemonColor: string;
  pokemonTypes: any;
  pokemonSpeciesInfo: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function PokemonModal(props: Props) {
  return (
    <>
      {ReactDOM.createPortal(
        <PokemonModalBody {...props} />,
        document.getElementById("modal-root")!
      )}
    </>
  );
}

export default PokemonModal;
