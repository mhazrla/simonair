import React from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./Columns";
import { useMemo } from "react/cjs/react.production.min";
import "./table.css";

export const BasicTable = ({ log }) => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => log, []);

    const tableInstance = useTable({
        columns,
        data,
    });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance;
    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.haeders.map((column) => (
                                <th {...column.getHeaderGroupProps()}>
                                    {columns.render("Header")}
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
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}{" "}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
