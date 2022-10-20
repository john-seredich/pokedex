import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPokemonData = (url: string) => {
  return axios.get(url);
};

export function usePokemonData(url: string) {
  return useQuery(["pokemonData", url], () => fetchPokemonData(url), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
