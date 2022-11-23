import styles from "./SectionHeader.module.scss";

interface Props {
  text: string;
  color: string;
  width: string;
}

function SectionHeader(props: Props) {
  return (
    <div className={styles.header}>
      <h2>{props.text}</h2>
      <div
        className={`${styles.header_bar} ${props.color}`}
        style={{
          width: `${props.width}`,
        }}
      ></div>
    </div>
  );
}

export default SectionHeader;
