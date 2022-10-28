import { useInView } from "react-intersection-observer";
import styles from "./Pokedex.module.scss";
import PokemonCard from "../PokemonCard/PokemonCard";
import { useState, useEffect } from "react";
import { usePokemonList } from "../../hooks/usePokemonList";
import Header from "../../layout/Header/Header";

interface pokemonListTypes {
  name: string;
  url: string;
}

function Pokedex() {
  const { data } = usePokemonList();
  const [pokemon, setPokemon] = useState<any>([]);
  const [enteredText, setEnteredText] = useState("");
  const [pageCount, setPageCount] = useState(20);
  const { ref, inView } = useInView({
    rootMargin: "200px",
  });

  // Map over pokemon data
  useEffect(() => {
    data?.data.results.forEach((pokemon: any) => {
      setPokemon((prevPokemon: any) => {
        return [...prevPokemon, pokemon.name];
      });
    });
  }, [data]);

  // Observer for scroll
  useEffect(() => {
    if (inView) {
      setPageCount((prevCount: number) => prevCount + 20);
    }
  }, [inView]);

  // Render Pokemon Cards
  const pokemonList = data?.data.results.map(
    (pokemon: pokemonListTypes, i: number) => {
      if (i >= pageCount) return null;
      const info = { name: pokemon.name, url: pokemon.url };
      if (i === pageCount - 1) {
        // Last item ref based on pageCount
        return (
          <div ref={ref} key={i}>
            <PokemonCard {...info} />
          </div>
        );
      } else {
        return (
          // Standard Item without ref
          <div key={i}>
            <PokemonCard {...info} />
          </div>
        );
      }
    }
  );

  return (
    <>
      <Header enteredText={enteredText} setEnteredText={setEnteredText} />
      <div className={styles.pokedex}>
        <div className={styles.pokedex__container}>
          {!enteredText && pokemonList}
        </div>
      </div>
    </>
  );
}

export default Pokedex;
