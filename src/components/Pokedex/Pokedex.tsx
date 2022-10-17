import { useInView } from "react-intersection-observer";
import { usePokemonsList } from "../../hooks/usePokemonList";
import axios from "axios";
import styles from "./Pokedex.module.scss";
import { useQueries } from "@tanstack/react-query";

interface pokemonListTypes {
  name: string;
  url: string;
}

const fetchPokemonData = (url: any) => {
  return axios.get(url);
};

function Pokedex() {
  const {
    isLoading,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePokemonsList();

  const { ref, inView } = useInView({
    rootMargin: "200px",
  });

  if (inView) {
    fetchNextPage();
  }

  // const pokemonUrl1 = data?.pages.map((group) => {
  //   return group.response.map((pokemon: pokemonListTypes, i: number) => {
  //     return pokemon.url;
  //   });
  // });

  const pokemonUrl = [
    [
      "https://pokeapi.co/api/v2/pokemon/1/",
      "https://pokeapi.co/api/v2/pokemon/2/",
      "https://pokeapi.co/api/v2/pokemon/3/",
      "https://pokeapi.co/api/v2/pokemon/4/",
      "https://pokeapi.co/api/v2/pokemon/5/",
      "https://pokeapi.co/api/v2/pokemon/6/",
      "https://pokeapi.co/api/v2/pokemon/7/",
      "https://pokeapi.co/api/v2/pokemon/8/",
      "https://pokeapi.co/api/v2/pokemon/9/",
      "https://pokeapi.co/api/v2/pokemon/10/",
      "https://pokeapi.co/api/v2/pokemon/11/",
      "https://pokeapi.co/api/v2/pokemon/12/",
      "https://pokeapi.co/api/v2/pokemon/13/",
      "https://pokeapi.co/api/v2/pokemon/14/",
      "https://pokeapi.co/api/v2/pokemon/15/",
      "https://pokeapi.co/api/v2/pokemon/16/",
      "https://pokeapi.co/api/v2/pokemon/17/",
      "https://pokeapi.co/api/v2/pokemon/18/",
      "https://pokeapi.co/api/v2/pokemon/19/",
      "https://pokeapi.co/api/v2/pokemon/20/",
    ],
  ];

  const queryResults = useQueries({
    queries: pokemonUrl[0].map((url, i) => {
      return {
        queryKey: ["pokemonData", i],
        queryFn: () => fetchPokemonData(url),
      };
    }),
  });

  const pokemonList = data?.pages.map((group) => {
    return group.response.map((pokemon: pokemonListTypes, i: number) => {
      if (group.response.length - 1 === i) {
        return (
          <div ref={ref} key={pokemon.name} className={styles.pokedex__card}>
            <h3>{pokemon.name}</h3>
            <img
              src={queryResults[i].data?.data.sprites.front_default}
              alt=""
            />
          </div>
        );
      }
      return (
        <div key={pokemon.name} className={styles.pokedex__card}>
          <h3>{pokemon.name}</h3>
          <img src={queryResults[i].data?.data.sprites.front_default} alt="" />
        </div>
      );
    });
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error instanceof Error)
    return <h2>Something went wrong. {error.message}</h2>;

  // TODO: Add a check if reaches the last page

  return (
    <div className={styles.pokedex}>
      <div className={styles.pokedex__container}>{pokemonList}</div>
      {isFetchingNextPage && <h2>Loading...</h2>}
    </div>
  );
}

export default Pokedex;
