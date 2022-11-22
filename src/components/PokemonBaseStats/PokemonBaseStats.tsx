import styles from "./PokemonBaseStats.module.scss";

interface Props {
  pokemonColor: string;
}

function PokemonBaseStats(props: Props) {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Hp</th>
          <td>
            <p>125</p>
            <div className={styles.table__bar}>
              <div></div>
            </div>
            <p>425</p>
          </td>
        </tr>
        <tr>
          <th>Attack</th>
          <td>
            <p>120</p>
            <div className={styles.table__bar}>
              <div></div>
            </div>
            <p>327</p>
          </td>
        </tr>
        <tr>
          <th>Defense</th>
          <td>
            <p>90</p>
            <div className={styles.table__bar}>
              <div></div>
            </div>
            <p>306</p>
          </td>
        </tr>
        <tr>
          <th>Sp.Atk</th>
          <td>
            <p>170</p>
            <div className={styles.table__bar}>
              <div></div>
            </div>
            <p>482</p>
          </td>
        </tr>
        <tr>
          <th>Sp.Def</th>
          <td>
            <p>100</p>
            <div className={styles.table__bar}>
              <div></div>
            </div>
            <p>328</p>
          </td>
        </tr>
        <tr>
          <th>Speed</th>
          <td>
            <p>95</p>
            <div className={styles.table__bar}>
              <div></div>
            </div>
            <p>317</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PokemonBaseStats;

// import styles from "./PokemonBaseStats.module.scss";

// function PokemonBaseStats() {
//   return (
//     <table className={styles.table}>
//       <tbody>
//         <tr>
//           <th>Hp</th>
//           <td>
//             <p>125</p>
//             <div className={styles.table__bar}>
//               <div></div>
//             </div>
//             <p>425</p>
//           </td>
//         </tr>
//         <tr>
//           <th>Attack</th>
//           <td>
//             <p>120</p>
//             <div className={styles.table__bar}>
//               <div></div>
//             </div>
//             <p>327</p>
//           </td>
//         </tr>
//         <tr>
//           <th>Defense</th>
//           <td>
//             <p>90</p>
//             <div className={styles.table__bar}>
//               <div></div>
//             </div>
//             <p>306</p>
//           </td>
//         </tr>
//         <tr>
//           <th>Sp.Atk</th>
//           <td>
//             <p>170</p>
//             <div className={styles.table__bar}>
//               <div></div>
//             </div>
//             <p>482</p>
//           </td>
//         </tr>
//         <tr>
//           <th>Sp.Def</th>
//           <td>
//             <p>100</p>
//             <div className={styles.table__bar}>
//               <div></div>
//             </div>
//             <p>328</p>
//           </td>
//         </tr>
//         <tr>
//           <th>Speed</th>
//           <td>
//             <p>95</p>
//             <div className={styles.table__bar}>
//               <div></div>
//             </div>
//             <p>317</p>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }

// export default PokemonBaseStats;

// 1
// function PokemonBaseStats() {
//     return (
//       <table className={styles.table}>
//         <tbody>
//           <tr>
//             <th>Hp</th>
//             <td>
//               <p>125</p>
//               <div className={styles.table__bar}>
//                 <div></div>
//               </div>
//               <p>425</p>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   }

//   export default PokemonBaseStats;
