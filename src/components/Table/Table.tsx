import styles from "./Table.module.scss";

interface Props {
  data: {
    heading: string;
    body: string;
  }[];
  isLoading: boolean;
}

function Table(props: Props) {
  const tableElements = props.data.map((item, i: number) => {
    return (
      <tr className={styles.table__row} key={i}>
        <th>{`${props.isLoading ? "Loading" : item.heading}`}</th>
        <td>{`${props.isLoading ? "Loading" : item.body}`}</td>
      </tr>
    );
  });

  return (
    <table className={styles.table}>
      <tbody>{tableElements}</tbody>
    </table>
  );
}

export default Table;
