import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPokemonList = () =>
  axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);

function PokedexMain() {
  const { data } = useQuery(["pokemon"], fetchPokemonList);
  console.log(data);
  return (
    <div>
      <h1>Pokedex</h1>
      {data?.data.results.map((pokemon: any) => {
        return <div>{pokemon.name}</div>;
      })}
    </div>
  );
}

export default PokedexMain;
