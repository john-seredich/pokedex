import styles from "./Table.module.scss";

interface Props {
  data: {
    heading: string;
    body: string;
  }[];
}

function Table(props: Props) {
  const tableElement = props.data.map((item, i: number) => {
    return (
      <tr key={i}>
        <th>{item.heading}</th>
        <td>{item.body}</td>
      </tr>
    );
  });

  return (
    <table className={styles.table}>
      <tbody>{tableElement}</tbody>
    </table>
  );
}

export default Table;
