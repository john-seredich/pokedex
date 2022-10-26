import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchPokemonList = () =>
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=1154");

export function usePokemonList() {
  return useQuery(["pokemonList"], fetchPokemonList, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
