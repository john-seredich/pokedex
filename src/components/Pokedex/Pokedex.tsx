import { useInView } from "react-intersection-observer";
import { usePokemonsList } from "../../hooks/usePokemonList";
import axios from "axios";
import styles from "./Pokedex.module.scss";
import { useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";

interface pokemonListTypes {
  name: string;
  url: string;
}

const fetchPokemonData = (url: any) => {
  return axios.get(url);
};

function Pokedex() {
  const {
    isLoading,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePokemonsList();

  const { ref, inView } = useInView({
    rootMargin: "200px",
  });

  if (inView) {
    fetchNextPage();
  }

  const pokemonList = data?.pages.map((group) => {
    return group.response.map((pokemon: pokemonListTypes, i: number) => {
      if (group.response) {
        const info = { name: pokemon.name, url: pokemon.url };
        if (group.response.length - 1 === i) {
          // Return Pokemon To observer for infinite scroll
          return (
            <div ref={ref} key={pokemon.name} className={styles.pokedex__card}>
              <PokemonCard {...info} />
            </div>
          );
        } else {
          // Return Non Observer Pokemon
          return (
            <div key={pokemon.name} className={styles.pokedex__card}>
              <PokemonCard {...info} />
            </div>
          );
        }
      }
    });
  });

  return (
    <div className={styles.pokedex}>
      <div className={styles.pokedex__container}>{pokemonList}</div>
      {isFetchingNextPage && <h2>Loading...</h2>}
    </div>
  );
}

export default Pokedex;

// import { useInView } from "react-intersection-observer";
// import { usePokemonsList } from "../../hooks/usePokemonList";
// import axios from "axios";
// import styles from "./Pokedex.module.scss";
// import { useQueries } from "@tanstack/react-query";
// import { pokemonUrlList } from "../../pokemonUrlList";
// import React, { useState, useEffect } from "react";

// interface pokemonListTypes {
//   name: string;
//   url: string;
// }

// const fetchPokemonData = (url: any) => {
//   return axios.get(url);
// };

// function Pokedex() {
//   const [pokemonUrls, setPokemonUrls] = useState(pokemonUrlList);
//   const {
//     isLoading,
//     error,
//     data,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//   } = usePokemonsList();

//   const { ref, inView } = useInView({
//     rootMargin: "200px",
//   });

//   if (inView) {
//     fetchNextPage();
//   }

//   const pokemonUrl = data?.pages.map((group) => {
//     return group.response.map((pokemon: pokemonListTypes, i: number) => {
//       return pokemon.url;
//     });
//   });

//   console.log(pokemonUrl);

//   // const queryResults = useQueries({
//   //   queries: pokemonUrl[0].map((url: any, i: any) => {
//   //     return {
//   //       queryKey: ["pokemonData", i],
//   //       queryFn: () => fetchPokemonData(url),
//   //       // initialData: pokemonUrl1,
//   //       // enabled: !!pokemonUrl,
//   //     };
//   //   }),
//   // });

//   const pokemonList = data?.pages.map((group) => {
//     return group.response.map((pokemon: pokemonListTypes, i: number) => {
//       if (group.response.length - 1 === i) {
//         // Set State, url
//         return (
//           <div ref={ref} key={pokemon.name} className={styles.pokedex__card}>
//             <h3>{pokemon.name}</h3>
//             {/* <img
//               src={queryResults[i].data?.data.sprites.front_default}
//               alt=""
//             /> */}
//           </div>
//         );
//       }
//       return (
//         <div key={pokemon.name} className={styles.pokedex__card}>
//           <h3>{pokemon.name}</h3>
//           {/* <img src={queryResults[i].data?.data.sprites.front_default} alt="" /> */}
//         </div>
//       );
//     });
//   });

//   if (isLoading) return <h2>Loading...</h2>;
//   if (error instanceof Error)
//     return <h2>Something went wrong. {error.message}</h2>;

//   // TODO: Add a check if reaches the last page

//   return (
//     <div className={styles.pokedex}>
//       <div className={styles.pokedex__container}>{pokemonList}</div>
//       {isFetchingNextPage && <h2>Loading...</h2>}
//     </div>
//   );
// }

// export default Pokedex;
