import { usePokemonData } from "../../hooks/usePokemonData";
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
  const { data, isLoading } = usePokemonData(props.url);
  const pokemonImg = data?.data.sprites.front_default;
  const pokemonNumber = data?.data.id;
  const pokemonName = setUpperCase(props.name);
  const pokemonColor = data?.data.types[0].type.name;
  const pokemonTypes = data?.data.types.map((type: pokemonType, i: number) => {
    const upperCaseType = setUpperCase(type.type.name);
    return <p key={i}>{upperCaseType}</p>;
  });

  console.log(data?.data.types);

  return (
    <div className={`${styles.pokemon_card} ${styles[pokemonColor]}`}>
      <h4>#{pokemonNumber}</h4>
      <h3>{pokemonName}</h3>
      {isLoading && <p>Loading...</p>}
      <img src={pokemonImg} alt={props.name} />
      {pokemonTypes}
    </div>
  );
}

export default PokemonCard;
