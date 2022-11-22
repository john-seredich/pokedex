import styles from "./Evolutions.module.scss";

interface Props {
  pokemonImg: string;
}

function Evolutions(props: Props) {
  return (
    <div className={styles.evolutions}>
      <div className={styles.evolutions__item}>
        <img src={props.pokemonImg} alt="" />
      </div>
      <div className={styles.evolutions__item}>
        <img src={props.pokemonImg} alt="" />
      </div>
      <div className={styles.evolutions__item}>
        <img src={props.pokemonImg} alt="" />
      </div>
    </div>
  );
}

export default Evolutions;
