"use client";
import Header from "@/components/common/Header";
import { HeaderData } from "@/components/lib/type";
import React from "react";

interface Row {
  id: number;
  name: string;
  amount: string;
  date: string;
  printId: string;
  serialNumber: string;
  checked: boolean;
}

interface TableInputProps {
  name: string;
  addRow: (row: Row) => void;
  setName: (name: string) => void;
  amount: string;
  setAmount: (amount: string) => void;
  printId: string;
  setPrintId: (printId: string) => void;
  serialNumber: string;
  setSerialNumber: (serialNumber: string) => void;
  editIndex: number | null;
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

export default function TableInput({
  name,
  addRow,
  setName,
  amount,
  setAmount,
  printId,
  setPrintId,
  serialNumber,
  setSerialNumber,
  editIndex,
  checked,
  setChecked,
}: TableInputProps) {
  const handleAddRow = () => {
    if (name && amount && printId) {
      const newRow: Row = {
        id: Date.now(),  // Generates a unique ID
        name,
        amount,
        date: new Date().toLocaleDateString(),
        printId,
        serialNumber,
        checked,
      };
      addRow(newRow);
      // Reset fields after adding
      setName("");
      setAmount("");
      setPrintId("");
      setSerialNumber("");
      setChecked(false);
    }
  };

  return (
    <div className="h-screen px-10 mt-5">
      <Header data={HeaderData} />
      <div className="mt-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2 outline-blue-400 rounded-lg"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 mr-2 outline-blue-400 rounded-lg"
        />
        <input
          type="text"
          placeholder="Print ID"
          value={printId}
          onChange={(e) => setPrintId(e.target.value)}
          className="border p-2 mr-2 outline-blue-400 rounded-lg"
        />
        <input
          type="text"
          placeholder="Serial ID"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          className="border p-2 mr-2 outline-blue-400 rounded-lg"
        />
        <button
          onClick={handleAddRow} 
          className="bg-Btn-Color text-white py-1 px-2 rounded mr-2 hover:bg-gray-800"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>

        <label className="mr-2">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mr-2"
          />
          Checked
        </label>
      </div>
    </div>
  );
}