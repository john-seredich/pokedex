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

interface IFlavorText {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}

// Insert Decimal into weight/height info
function insertDecimal(num: string) {
  const numberToString = num.length;
  if (numberToString === 1) {
    return `0.${num}`;
  } else if (numberToString === 2) {
    return `${num[0]}.${num[1]}`;
  } else if (numberToString === 3) {
    return `${num.slice(0, 2)}.${num[2]}`;
  } else {
    return `${num.slice(0, 3)}.${num[3]}`;
  }
}

function PokemonModalData(props: pokemonDataProps) {
  const { data: species, isLoading } = usePokemonData(props.pokemonSpeciesInfo);

  // Find english description
  const flavorText: IFlavorText = species?.data.flavor_text_entries.find(
    (lang: any) => {
      return lang.language.name === "en";
    }
  );

  // Find Abilities
  const abilities: IAbility = props.data?.data.abilities.map(
    (obj: IAbility) => {
      return (
        " " + obj.ability.name[0].toUpperCase() + obj.ability.name.slice(1)
      );
    }
  );

  // Find Growth Rate
  const growthRate: string =
    species?.data.growth_rate.name[0].toUpperCase() +
    species?.data.growth_rate.name.slice(1);

  const information = [
    {
      heading: "Height",
      body: `${insertDecimal(props.data?.data.height.toString())} m`,
    },
    {
      heading: "Weight",
      body: `${insertDecimal(props.data?.data.weight.toString())} kg`,
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
      body: growthRate,
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
        <p>{flavorText && flavorText.flavor_text}</p>
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
