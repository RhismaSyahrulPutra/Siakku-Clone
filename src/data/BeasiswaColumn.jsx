import { createColumnHelper } from "@tanstack/react-table";
import { X, Check } from "lucide-react";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("nama", {
    header: "Nama Beasiswa",
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("tahun", {
    header: "Tahun",
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: info => {
      const status = info.getValue();
      return (
        <span
          className={`inline-flex items-center justify-center gap-1 px-2 py-1 rounded-full text-sm font-medium min-w-[120px] ${
            status === "Diterima"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {status === "Diterima" ? (
            <Check className="w-4 h-4" />
          ) : (
            <X className="w-4 h-4" />
          )}
          {status}
        </span>
      );
    },
  }),
];

export default columns;
