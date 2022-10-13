import { useInView } from "react-intersection-observer";
import { usePokemonsList } from "../../hooks/usePokemonList";
import styles from "./Pokedex.module.scss";

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

  if (inView) {
    fetchNextPage();
  }

  const pokemonList = data?.pages.map((group) => {
    return group.response.map((pokemon: pokemonListTypes, i: number) => {
      // Last element in each API call
      if (group.response.length - 1 === i) {
        return (
          <div ref={ref} key={pokemon.name} className={styles.pokedex__card}>
            <h3>{pokemon.name}</h3>
          </div>
        );
      }
      return (
        <div key={pokemon.name} className={styles.pokedex__card}>
          <h3>{pokemon.name}</h3>
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
