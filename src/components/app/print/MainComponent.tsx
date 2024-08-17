"use client";
import { useState } from "react";
import TableInput from "./InputField";

interface Row {
  id: number;
  name: string;
  amount: string;
  date: string;
  printId: string;
  serialNumber: string;
  checked: boolean;
}

interface MainComponentProps {
  addRow: (row: Row) => void;
}

export default function MainComponent({ addRow }: MainComponentProps) {
  const [printId, setPrintId] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [checked, setChecked] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

 

  const resetFields = () => {
    setName("");
    setAmount("");
    setPrintId("");
    setSerialNumber("");
    setChecked(false);
  };

  return (
    <TableInput
      addRow={addRow}
      name={name}
      setName={setName}
      amount={amount}
      setAmount={setAmount}
      printId={printId}
      setPrintId={setPrintId}
      serialNumber={serialNumber}
      setSerialNumber={setSerialNumber}
      editIndex={editIndex}
      checked={checked}
      setChecked={setChecked}
    />
  );
}