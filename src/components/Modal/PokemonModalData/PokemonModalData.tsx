import { usePokemonData } from "../../../hooks/usePokemonData";
import { pokemonDataProps } from "../../../shared/interfaces/pokemonDataProps.interface";
import Table from "../../Table/Table";
import SectionHeader from "../../SectionHeader/SectionHeader";
import styles from "./PokemonModalData.module.scss";

interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  isHidden: boolean;
  slot: number;
}

interface IStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

function PokemonModalData(props: pokemonDataProps) {
  const { data: species, isLoading } = usePokemonData(props.pokemonSpeciesInfo);
  const flavorText = species?.data.flavor_text_entries[0].flavor_text;
  const abilities = props.data?.data.abilities.map((obj: IAbility) => {
    return " " + obj.ability.name[0].toUpperCase() + obj.ability.name.slice(1);
  });

  const information = [
    // Fix the data having no decimals
    {
      heading: "Height",
      body: props.data?.data.height,
    },
    {
      heading: "Weight",
      body: props.data?.data.weight,
    },
    {
      heading: "Category",
      body: species?.data.genera[7].genus,
    },
    {
      heading: "Abilities",
      body: abilities.toString(),
    },
  ];

  const training = [
    // Fix growth rate not being capital
    {
      heading: "Base Exp",
      body: props.data?.data.base_experience,
    },
    {
      heading: "Base Happiness",
      body: species?.data.base_happiness,
    },
    {
      heading: "Catch Rate",
      body: species?.data.capture_rate,
    },
    {
      heading: "Growth Rate",
      body: species?.data.growth_rate.name,
    },
  ];

  const stats = props.data?.data.stats.map((stat: IStat) => {
    return {
      heading: stat.base_stat,
      body: stat.stat.name,
    };
  });

  return (
    <div className={styles.data}>
      <div className={styles.data__about}>
        <SectionHeader color={props.pokemonColor} text="About" width="49px" />
        {isLoading && <p>Loading...</p>}
        <p>{flavorText}</p>
        <div className={styles.data__types}>{props.pokemonTypes}</div>
      </div>

      <div>
        <SectionHeader
          color={props.pokemonColor}
          text="Information"
          width="64px"
        />
        <Table data={information} isLoading={isLoading} />
      </div>
      <div>
        <SectionHeader
          color={props.pokemonColor}
          text="Training"
          width="64px"
        />
        <Table data={training} isLoading={isLoading} />
      </div>
      <div>
        <SectionHeader
          color={props.pokemonColor}
          text="Base Stats"
          width="83px"
        />
        <Table data={stats} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default PokemonModalData;
