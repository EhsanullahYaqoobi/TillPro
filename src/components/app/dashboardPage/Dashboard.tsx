import React from "react";
import Link from "next/link";
import { GoTriangleRight } from "react-icons/go";
import ShiftingCountdown from "./CountDown";

export default function Dashboard() {
  return (
    <div className="mx-10 h-screen">
    <div className="flex flex-col  justify-center mt-5 bg-slate-100 rounded-md">
      <div className="w-full p-5 flex justify-between">
        <h1 className="text-lg font-bold text-slate-600">Dashboard</h1>
        <span className="flex gap-2 items-center text-slate-600">
          <h1 className="text-lg font-semibold">dashboard</h1>
          <GoTriangleRight className="text-2xl cursor-pointer" />
          <Link href="/print">
            <h2 className="text-lg font-semibold text-slate-600 cursor-pointer">
              Print
            </h2>
          </Link>
        </span>
      </div>
    </div>
    <ShiftingCountdown />
    </div>
  );
}
