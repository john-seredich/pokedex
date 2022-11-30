export interface pokemonDataProps {
  data: any;
  pokemonNumber: string;
  pokemonName: string;
  pokemonImg: string;
  pokemonColor: string;
  pokemonTypes: any;
  pokemonSpeciesInfo: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
