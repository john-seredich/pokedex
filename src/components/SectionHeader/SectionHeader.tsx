import styles from "./SectionHeader.module.scss";

interface Props {
  text: string;
  color: string;
}

function SectionHeader(props: Props) {
  return (
    <div className={styles.header}>
      <h2>{props.text}</h2>
      <div className={`${styles.header_bar} ${props.color}`}></div>
    </div>
  );
}

export default SectionHeader;
