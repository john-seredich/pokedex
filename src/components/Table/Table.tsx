import styles from "./Table.module.scss";

function Table() {
  const data = [
    {
      heading: "Height",
      body: "0.90m",
    },
    {
      heading: "Weight",
      body: "0.90m",
    },
    {
      heading: "Category",
      body: "Seed",
    },
    {
      heading: "Abilities",
      body: "Overgrowth, Chlorophyll",
    },
  ];

  const tableElement = data.map((item, i: number) => {
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
