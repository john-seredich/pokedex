import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPokemonList = async ({
  pageParam = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
}) => {
  const request = await axios.get(pageParam);
  const { results, next } = await request.data;
  return { response: results, nextPage: next };
};

export function usePokemonsList() {
  return useInfiniteQuery(["pokemon"], fetchPokemonList, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
}
