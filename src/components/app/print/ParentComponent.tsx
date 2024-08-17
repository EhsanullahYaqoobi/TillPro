"use client";
import React, { useState } from "react";
import MainComponent from "./MainComponent";
import TableComponent from "./TableComponent";

interface Row {
  id: number;
  name: string;
  amount: string;
  date: string;
  printId: string;
  serialNumber: string;
  checked: boolean;
}

export default function ParentComponent() {
  const [rows, setRows] = useState<Row[]>([]);

  const addRow = (newRow: Row) => {
    setRows([...rows, newRow]);
  };

  const updateRow = (updatedRow: Row) => {
    setRows(rows.map(row => (row.id === updatedRow.id ? updatedRow : row)));
  };

  return (
    <div>
      <MainComponent addRow={addRow} />
      <TableComponent rows={rows} setRows={setRows}/>
    </div>
  );
}