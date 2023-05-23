import React from "react";

function Table() {
  const data = [
    { id: "1", header: "Hello 1", table: "Element 1" },
    { id: "2", header: "Hello 2", table: "Element 2" },
    { id: "3", header: "Hello 3", table: "Element 3" },
    { id: "4", header: "Hello 4", table: "Element 4" },
  ];

  const renderHeader = data.map((header) => {
    return <th key={header.id}>{header.header}</th>;
  });

  const renderColumns = data.map((element) => {
    return <td key={element.id}>{element.table}</td>;
  });

  return (
    <table>
      <thead>{renderHeader}</thead>
      <tbody>{renderColumns}</tbody>
    </table>
  );
}

export default Table;
