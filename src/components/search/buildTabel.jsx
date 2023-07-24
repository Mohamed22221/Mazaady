import React from "react";
import { useTable } from "react-table";

const BuildTabel = ({ dataForm }) => {
  const columnsForm = Object.entries(dataForm)
    .map(([key, value]) => [
      {
        Header: key.split("ID:")[0],
        accessor: key.split("ID:")[0],
        value: value,
        Cell: (cellProps) => {
          return cellProps.cell.value.split("ID:")[0];
        },
      },
    ])
    .flat(2)
    .filter((item) => item.value !== "other");
  const data = React.useMemo(() => [dataForm], [dataForm]);
  const columns = React.useMemo(() => columnsForm, [dataForm]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div
      dir="ltr"
      lang="en"
      className=" wrapper-style container mx-auto my-5 px-3 py-5 shadow-box rounded-[5px] "
    >
      <div className="responsive">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} key={column.id}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr key={row.getRowProps()} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td key={cell.getCellProps()} {...cell.getCellProps()}>
                      {" "}
                      {cell.render("Cell")}{" "}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuildTabel;
