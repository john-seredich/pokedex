import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface pokemonListTypes {
  name: string;
  url: string;
}

const fetchPokemonList = async ({
  pageParam = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
}) => {
  const request = await axios.get(pageParam);
  const { results, next } = await request.data;
  return { response: results, nextPage: next };
};

function Pokedex() {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["pokemon"], fetchPokemonList, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
  return (
    <div>
      <h1>Pokedex</h1>
      <div>
        {data?.pages.map((group, i) =>
          group.response.map((pokemon: pokemonListTypes) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))
        )}
      </div>
      <div>
        <button
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default Pokedex;
