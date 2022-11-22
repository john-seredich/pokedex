import { useState, useEffect } from "react";
import { usePokemonData } from "../../hooks/usePokemonData";
import PokemonModal from "../PokemonModal/PokemonModal";
import styles from "./PokemonCard.module.scss";

interface Props {
  name: string;
  url: string;
}

interface pokemonType {
  slot: string;
  type: {
    name: string;
    url: string;
  };
}

function setUpperCase(string: string) {
  return string[0].toUpperCase() + string.slice(1);
}

function PokemonCard(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = usePokemonData(props.url);
  const pokemonImg: string = data?.data.sprites.front_default;
  const pokemonNumber: string = data?.data.id;
  const pokemonName: string = setUpperCase(props.name);
  const pokemonColor: string = data?.data.types[0].type.name;
  const pokemonSpeciesInfo: string = data?.data.species.url;
  const pokemonTypes = data?.data.types.map((type: pokemonType, i: number) => {
    const upperCaseType = setUpperCase(type.type.name);
    return (
      <p className={`${styles[type.type.name]}`} key={i}>
        {upperCaseType}
      </p>
    );
  });

  const propsObj = {
    data,
    pokemonImg,
    pokemonNumber,
    pokemonName,
    pokemonColor,
    pokemonTypes,
    pokemonSpeciesInfo,
    setIsOpen,
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && <PokemonModal {...propsObj} />}
      <div
        className={`${styles.pokemon_card} ${styles[pokemonColor]}`}
        onClick={() => setIsOpen(true)}
      >
        <h4>#{pokemonNumber}</h4>
        <h3>{pokemonName}</h3>
        {isLoading && <p>Loading...</p>}
        <img src={pokemonImg} alt={props.name} />
        {pokemonTypes}
      </div>
    </>
  );
}

export default PokemonCard;
