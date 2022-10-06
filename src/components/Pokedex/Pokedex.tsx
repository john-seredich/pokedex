import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({
    rootMargin: "100px",
  });

  if (inView) {
    fetchNextPage();
  }

  const pokemonList = data?.pages.map((group) => {
    return group.response.map((pokemon: pokemonListTypes, i: number) => {
      if (group.response.length - 1 === i) {
        return (
          <li ref={ref} key={pokemon.name}>
            {pokemon.name} - ref
          </li>
        );
      }
      return <li key={pokemon.name}>{pokemon.name}</li>;
    });
  });

  return (
    <div>
      <h1>Pokedex</h1>
      <div>{pokemonList}</div>
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
