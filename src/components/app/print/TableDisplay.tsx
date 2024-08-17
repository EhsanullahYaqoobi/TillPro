"use client";
import Header from "@/components/common/Header";
import { data, HeaderData } from "@/components/lib/type";
import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

interface Row {
  id: number;
  name: string;
  amount: string;
  date: string;
  printId: string;
  serialNumber: string;
  checked: boolean;
}

type TableDisplayProps = {
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
  onEdit: (row: Row) => void;
  onDelete: (id: number) => void;
  rows: Row[];
};

export default function TableDisplay({
  onMoveUp,
  onMoveDown,
  onEdit,
  onDelete,
  rows,
}: TableDisplayProps) {
  return (
    <div className="h-screen">
      <Header data={HeaderData} />
      <div className="mt-5">
        <table className="min-w-full border border-gray-300">
          <thead className="">
            <tr className="bg-gray-200 text-gray-600">
              <th></th>
              {data.map((header) => (
                <th key={header.id} className="border px-4 py-2">
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="flex flex-col gap-3 items-center mt-[8px]">
                  <FaAngleUp
                    className="cursor-pointer hover:text-purple-400"
                    onClick={() => onMoveUp(index)}
                  />
                  <FaAngleDown
                    className="cursor-pointer hover:text-purple-400"
                    onClick={() => onMoveDown(index)}
                  />
                </td>
                <td className="border px-4 py-2 text-center">{row.id}</td>
                <td className="border px-4 py-2 text-center">{row.name}</td>
                <td className="border px-4 py-2 text-center">{row.amount}</td>
                <td className="border px-4 py-2 text-center">{row.date}</td>
                <td className="border px-4 py-2 text-center">{row.printId}</td>
                <td className="border px-4 py-2 text-center">
                  {row.serialNumber}
                </td>
                <td className="border px-4 py-2 text-center">
                  <input type="checkbox" checked={row.checked} readOnly />
                </td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => onEdit(row)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-gray-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(row.id)}
                    className="bg-red-400 text-white px-2 py-1 rounded hover:bg-gray-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
