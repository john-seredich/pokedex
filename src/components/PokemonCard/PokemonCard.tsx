import { usePokemonData } from "../../hooks/usePokemonData";
import styles from "./PokemonCard.module.scss";

function useUpperCase(string: string) {
  return string[0].toUpperCase() + string.slice(1);
}

function PokemonCard(props: any) {
  const { data, isLoading } = usePokemonData(props.url);
  const img = data?.data.sprites.front_default;
  const types = data?.data.types.map((type: any, i: number) => {
    return <p key={i}>{type.type.name}</p>;
  });
  const pokemonNumber = data?.data.id;
  const pokemonName = useUpperCase(props.name);
  console.log(data?.data);

  return (
    <div className={styles.pokemon_card}>
      <h4>#{pokemonNumber}</h4>
      <h3>{pokemonName}</h3>
      {isLoading && <p>Loading...</p>}
      <img src={img} alt={props.name} />
      {types}
    </div>
  );
}

export default PokemonCard;
