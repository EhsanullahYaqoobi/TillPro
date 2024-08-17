import React from "react";
import TableDisplay from "./TableDisplay";

interface Row {
  id: number;
  name: string;
  amount: string;
  date: string;
  printId: string;
  serialNumber: string;
  checked: boolean;
}

interface TableComponentProps {
  rows: Row[];
  setRows: (rows: Row[]) => void;
}

export default function TableComponent({ rows, setRows }: TableComponentProps) {
  const startEdit = (row: Row) => {
    const updatedRows = rows.map((r) =>
      r.id === row.id ? { ...r, checked: !r.checked } : r
    );
    setRows(updatedRows);
  };

  const deleteRow = (id: number) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const moveRowUp = (index: number) => {
    if (index > 0) {
      const newRows = [...rows];
      [newRows[index], newRows[index - 1]] = [
        newRows[index - 1],
        newRows[index],
      ];
      setRows(newRows);
    }
  };
  const moveRowDown = (index: number) => {
    if (index < rows.length - 1) {
      const newRows = [...rows];
      [newRows[index], newRows[index + 1]] = [
        newRows[index + 1],
        newRows[index],
      ];
      setRows(newRows);
    }
  };

  return (
    <div className="mx-10 mt-5">
      <TableDisplay
        rows={rows}
        onEdit={startEdit}
        onDelete={deleteRow}
        onMoveUp={moveRowUp}
        onMoveDown={moveRowDown}
      />
    </div>
  );
}
