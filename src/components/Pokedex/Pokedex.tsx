import { useInView } from "react-intersection-observer";
import { usePokemonsList } from "../../hooks/usePokemonList";
import styles from "./Pokedex.module.scss";
import PokemonCard from "../PokemonCard/PokemonCard";

interface pokemonListTypes {
  name: string;
  url: string;
}

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

  if (hasNextPage && inView) {
    fetchNextPage();
  }

  const pokemonList = data?.pages.map((group) => {
    return group.response.map((pokemon: pokemonListTypes, i: number) => {
      if (group.response) {
        const info = { name: pokemon.name, url: pokemon.url };
        if (group.response.length - 1 === i) {
          // Return Pokemon To observer for infinite scroll
          return (
            <div ref={ref} key={pokemon.name}>
              <PokemonCard {...info} />
            </div>
          );
        } else {
          // Return Non Observer Pokemon
          return (
            <div key={pokemon.name}>
              <PokemonCard {...info} />
            </div>
          );
        }
      }
      return null;
    });
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error instanceof Error)
    return <h2>Something went wrong. {error.message}</h2>;

  return (
    <div className={styles.pokedex}>
      <div className={styles.pokedex__container}>{pokemonList}</div>
      {isFetchingNextPage && <h2>Loading...</h2>}
    </div>
  );
}

export default Pokedex;
