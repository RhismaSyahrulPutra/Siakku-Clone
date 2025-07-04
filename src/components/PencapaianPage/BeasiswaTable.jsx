import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { X, Check } from "lucide-react";

function BeasiswaTable({ data, columns }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto border border-gray-300 rounded-xl">
      <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
        <thead className="bg-red-700 text-white uppercase font-semibold">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="px-4 py-3 text-center border border-gray-300"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="text-center">
          {table.getRowModel().rows.map((row, rowIndex) => (
            <tr
              key={row.id}
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 py-3 border border-gray-300">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BeasiswaTable;
