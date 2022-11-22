import { useInView } from "react-intersection-observer";
import styles from "./Pokedex.module.scss";
import PokemonCard from "../PokemonCard/PokemonCard";
import { useState, useEffect } from "react";
import { usePokemonList } from "../../hooks/usePokemonList";
import Header from "../../layout/Header/Header";
import "../../index.css";
import PokemonModal from "../PokemonModal/PokemonModal";

interface pokemonListTypes {
  name: string;
  url: string;
}

function Pokedex() {
  const { data } = usePokemonList();
  const [pokemons, setPokemons] = useState<Array<pokemonListTypes>>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<
    Array<pokemonListTypes>
  >([]);
  const [enteredText, setEnteredText] = useState("");
  const [pageCount, setPageCount] = useState(20);
  const { ref, inView } = useInView({
    rootMargin: "200px",
  });

  // Map over pokemon data
  useEffect(() => {
    data?.data.results.forEach((pokemon: pokemonListTypes) => {
      setPokemons((prevPokemons) => {
        return [...prevPokemons, { name: pokemon.name, url: pokemon.url }];
      });
    });
  }, [data]);

  // Filter Function
  useEffect(() => {
    function filterPokemon(value: string) {
      const filteredPokemon = pokemons.filter((pokemon) => {
        if (!pokemon.name.toLowerCase().includes(value)) return false;
        return {
          name: pokemon.name.toLowerCase().includes(value),
          url: pokemon.url,
        };
      });
      setFilteredPokemon(filteredPokemon);
    }

    if (enteredText) {
      filterPokemon(enteredText.toLowerCase());
    }
  }, [enteredText, pokemons]);

  // Observer for scroll
  useEffect(() => {
    if (inView) {
      setPageCount((prevCount: number) => prevCount + 20);
    }
  }, [inView]);

  // Render Pokemon Cards
  const pokemonList = pokemons.map((pokemon: pokemonListTypes, i: number) => {
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
  });

  // Render Filtered Pokemon Cards
  const filteredPokemonList = filteredPokemon.map(
    (pokemon: pokemonListTypes, i: number) => {
      const info = { name: pokemon.name, url: pokemon.url };
      return (
        <div key={i}>
          <PokemonCard {...info} />
        </div>
      );
    }
  );

  return (
    <>
      <Header enteredText={enteredText} setEnteredText={setEnteredText} />
      <div className={styles.pokedex}>
        <div className={styles.pokedex__container}>
          {!enteredText && pokemonList}
          {enteredText && filteredPokemonList}
        </div>
      </div>
    </>
  );
}

export default Pokedex;
