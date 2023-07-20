import { useGetOptionsCatsQuery, useGetPropertiesCatsQuery } from "@/api/services/packagesApi";
import React from "react";
import { useTable } from "react-table";

const TabelSearch = ({ dataForm, allCats }) => {
  const handelFilter = (data, id) => {
    return data?.filter((item) => item.id === id);
  };
  const data = React.useMemo(() => [dataForm], [dataForm]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Categorys",
        accessor: "categorys",
        Cell: (cellProps) => {
          const id = cellProps.cell.value;
          const value = handelFilter(allCats?.data?.categories, id);
          return value?.map((item) => item.name)[0];
        },
      },
      {
        Header: "Sub Category",
        accessor: "sub_category",
        Cell: (cellProps) => {
          const idCat = cellProps.data[0].categorys;
          const id = cellProps.cell.value;
          const filterCat = handelFilter(allCats?.data?.categories, idCat);
          const value = filterCat?.filter((item) => item.id === idCat)[0];
          return value?.children?.filter((item) => item.id === id)[0].name;
        },
      },
      {
        Header: "Properties",
        accessor: "properties",
        Cell: (cellProps) => {
          const idSubCategory = cellProps.data[0].sub_category;
          const id =cellProps.cell.value ;
          const properties = useGetPropertiesCatsQuery(idSubCategory);
          const valueProperties = properties?.data?.data;
          const value = handelFilter(valueProperties, id);
          return cellProps.cell.value === "" ? "no properties" :value?.map((item) => item.name)[0]
        },
      },

      {
        Header: "Type",
        accessor: "type",
        Cell: (cellProps) => {
          const id = cellProps.cell.value;
          const idSubCategory =  cellProps.data[0].sub_category;
          const idProp =  cellProps.data[0].properties;
          const dataProperties = useGetPropertiesCatsQuery(idSubCategory);
          const getType = dataProperties?.data?.data;
          const value = handelFilter(getType, idProp);
          const valueFlat = handelFilter(value?.map((item) => item.options).flat(2), id);
          return cellProps.cell.value === "" ? "no type" : valueFlat?.map((item) => item.name)[0]
        },
      },
      {
        Header: "option",
        accessor: "option",
        Cell: (cellProps) => {
          
          const idOptions = cellProps.data[0].type;
          const dataOptions = useGetOptionsCatsQuery(idOptions);
          const getOption = dataOptions?.data?.data;
          const value = handelFilter(getOption?.map((item) =>item.options).flat(2),cellProps.cell.value )
          return cellProps.cell.value === "" ? "no option" : value?.map((item) => item.name)[0]
        },
      },
      {
        Header: "Other",
        accessor: "other",
        Cell: (cellProps) => {
          return cellProps.cell.value === ""
            ? "No Other"
            : cellProps.cell.value;
        },
      },
    ],
    [dataForm]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
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
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
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

export default TabelSearch;
