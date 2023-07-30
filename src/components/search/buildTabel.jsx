import React from "react";
import { useTable } from "react-table";
//shared components
import { splitData } from "../shared/split";

const BuildTabel = ({ dataForm }) => {
  const columnsForms = Object.entries(dataForm)
    .map(([key, value]) => {
      if (key === "items") {
        return Object.entries(value).map(([keyItems, valItems]) => {
          return [
            {
              Header: splitData(keyItems, 0),
              accessor: splitData(keyItems, 0),
              value: valItems,
              Cell: (cellProps) => {
                return splitData(cellProps.cell.column.value, 0);
              },
            },
          ];
        });
      } else {
        return [
          {
            Header: splitData(key, 0),
            accessor: splitData(key, 0),
            value: value,
            Cell: (cellProps) => {
              return splitData(cellProps.cell.value, 0);
            },
          },
        ];
      }
    })
    .flat(2)
    .filter((item) => item.value != "other");
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
