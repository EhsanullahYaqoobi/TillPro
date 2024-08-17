// DynamicTablePage.tsx
"use client";
import React, { useState } from "react";
// import TableInput from "./tableinput/TableInput";
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

export default function DynamicTablePage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [savedRows, setSavedRows] = useState<Row[]>([]);

  const addRow = (row: Row) => {
    setRows([...rows, row]);
  };

  const deleteRow = (id: number) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const startEdit = (row: Row) => {
    const updatedRows = rows.map(r => (r.id === row.id ? { ...r, checked: !r.checked } : r));
    setRows(updatedRows);
  };

  const moveRowUp = (index: number) => {
    if (index > 0) {
      const newRows = [...rows];
      [newRows[index], newRows[index - 1]] = [newRows[index - 1], newRows[index]];
      setRows(newRows);
    }
  };

  const moveRowDown = (index: number) => {
    if (index < rows.length - 1) {
      const newRows = [...rows];
      [newRows[index], newRows[index + 1]] = [newRows[index + 1], newRows[index]];
      setRows(newRows);
    }
  };

  const saveRows = () => {
    setSavedRows(rows);
    alert("Table saved successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4 text-gray-600">Receipt Table</h1>
      {/* <TableInput addRow={addRow} /> */}
      <TableDisplay
        rows={rows}
        onEdit={startEdit}
        onDelete={deleteRow}
        onMoveUp={moveRowUp}
        onMoveDown={moveRowDown}
      />
      <button onClick={saveRows} className="bg-Btn-Color text-white py-1 px-2 rounded mt-4 hover:bg-gray-800">
        Save
      </button>
    </div>
  );
}