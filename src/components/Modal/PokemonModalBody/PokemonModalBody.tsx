import { usePokemonData } from "../../../hooks/usePokemonData";
import { pokemonDataProps } from "../../../shared/interfaces/pokemonDataProps.interface";
import {
  biography,
  pokemonStats,
  trainingData,
} from "../../../test_data/tableTestData";
import SectionHeader from "../../SectionHeader/SectionHeader";
import Table from "../../Table/Table";
import PokemonModalHeader from "../PokemonModalHeader/PokemonModalHeader";
import styles from "./PokemonModalBody.module.scss";

interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  isHidden: boolean;
  slot: number;
}

function PokemonModalBody(props: pokemonDataProps) {
  const { data: species } = usePokemonData(props.pokemonSpeciesInfo);
  const flavorText = species?.data.flavor_text_entries[1].flavor_text;
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
      body: "Seed",
    },
    {
      heading: "Abilities",
      body: abilities.toString(),
    },
  ];

  console.log(species?.data.flavor_text_entries);

  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={`${styles.modal}`} onClick={() => props.setIsOpen(false)}>
        <PokemonModalHeader {...props} />
        <div className={styles.modal__data}>
          <div className={styles.modal__data_about}>
            <SectionHeader
              color={props.pokemonColor}
              text="About"
              width="49px"
            />
            <p>{flavorText}</p>
            <div className={styles.modal__data_types}>{props.pokemonTypes}</div>
          </div>

          <div>
            <SectionHeader
              color={props.pokemonColor}
              text="Information"
              width="64px"
            />
            <Table data={information} />
          </div>
          <div>
            <SectionHeader
              color={props.pokemonColor}
              text="Training"
              width="64px"
            />
            <Table data={trainingData} />
          </div>
          <div>
            <SectionHeader
              color={props.pokemonColor}
              text="Base Stats"
              width="83px"
            />
            <Table data={pokemonStats} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonModalBody;
