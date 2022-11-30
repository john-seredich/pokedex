import ReactDOM from "react-dom";
import { pokemonDataProps } from "../../../shared/interfaces/pokemonDataProps.interface";
import PokemonModalBody from "../PokemonModalBody/PokemonModalBody";

function PokemonModal(props: pokemonDataProps) {
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
