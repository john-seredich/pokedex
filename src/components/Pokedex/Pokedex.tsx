import { useInView } from "react-intersection-observer";
import { usePokemonsList } from "../../hooks/usePokemonList";
import styles from "./Pokedex.module.scss";
import PokemonCard from "../PokemonCard/PokemonCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

interface pokemonListTypes {
  name: string;
  url: string;
}

const fetchPokemonList = () =>
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=1154");

function Pokedex() {
  const [pageCount, setPageCount] = useState(20);
  const { data } = useQuery(["pokemonList"], fetchPokemonList, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const { ref, inView } = useInView({
    rootMargin: "200px",
  });

  useEffect(() => {
    if (inView) {
      setPageCount((prevCount: any) => prevCount + 20);
    }
  }, [inView]);

  const pokemonList = data?.data.results.map((pokemon: any, i: number) => {
    if (i >= pageCount) return null;
    const info = { name: pokemon.name, url: pokemon.url };
    if (i === pageCount - 1) {
      // Observer Ref
      return (
        <div ref={ref} key={i}>
          <PokemonCard {...info} />
        </div>
      );
    } else {
      return (
        // Standard Item
        <div key={i}>
          <PokemonCard {...info} />
        </div>
      );
    }
  });

  return (
    <div className={styles.pokedex}>
      <div className={styles.pokedex__container}>{pokemonList}</div>
    </div>
  );
}

export default Pokedex;
