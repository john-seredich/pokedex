import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPokemonList = () => {
  const request = axios
    .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
    .then((response) => response.data);
};

function Pokedex() {
  fetchPokemonList();
  return <div>Pokedex</div>;
}

export default Pokedex;
