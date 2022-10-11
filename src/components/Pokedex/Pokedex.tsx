import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Pokedex.module.scss";

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
    rootMargin: "200px",
  });

  if (inView) {
    fetchNextPage();
  }

  const pokemonList = data?.pages.map((group) => {
    return group.response.map((pokemon: pokemonListTypes, i: number) => {
      if (group.response.length - 1 === i) {
        return (
          <div className={styles.pokedex__card}>
            <li ref={ref} key={pokemon.name}>
              {pokemon.name}
            </li>
          </div>
        );
      }
      return (
        <div className={styles.pokedex__card}>
          <li key={pokemon.name}>{pokemon.name}</li>
        </div>
      );
    });
  });

  return (
    <div className={styles.pokedex}>
      <div className={styles.pokedex__container}>{pokemonList}</div>
      {/* <div>
        <button
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          Load More
        </button>
      </div> */}
    </div>
  );
}

export default Pokedex;
