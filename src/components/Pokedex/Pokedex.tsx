import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPokemonList = async () => {
  const request = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const { results, next } = await request.data;
  return { response: results, nextPage: next };
};

function Pokedex() {
  fetchPokemonList();
  return <div>Pokedex</div>;
}

export default Pokedex;
