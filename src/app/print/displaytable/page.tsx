"use client";
import TableComponent from '@/components/app/print/TableComponent'
import React, { useState } from 'react'

interface Row {
  id: number;
  name: string;
  amount: string;
  date: string;
  printId: string;
  serialNumber: string;
  checked: boolean;
}

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [rows, setRows] = useState<Row[]>([]);
  return (
    <div>
      <TableComponent rows={rows} setRows={setRows} />
    </div>
  )
}
