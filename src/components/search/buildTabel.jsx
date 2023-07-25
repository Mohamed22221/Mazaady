import React from "react";
import { useTable } from "react-table";

const BuildTabel = ({ dataForm }) => {
  const columnsForms = Object.entries(dataForm)
    .map(([key, value], i) => {
      if (i === 2) {
        return Object.entries(value).map(([keyItems, valItems]) => {
          return [
            {
              Header: keyItems.split("ID:")[0],
              accessor: keyItems.split("ID:")[0],
              value: valItems,
              Cell: (cellProps) => {
                return cellProps.cell.column.value.split("ID:")[0];
              },
            },
          ];
        });
      } else {
        return [
          {
            Header: key.split("ID:")[0],
            accessor: key.split("ID:")[0],
            value: value,
            Cell: (cellProps) => {
              return cellProps.cell.value.split("ID:")[0];
            },
          },
        ];
      }
    })
    .flat(2)
    .filter((item) => item.value != "other");

  console.log(columnsForms.flat(2));
  const data = React.useMemo(() => [dataForm], [dataForm]);
  const columns = React.useMemo(() => columnsForms, [dataForm]);

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
