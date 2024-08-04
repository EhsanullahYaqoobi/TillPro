import React from "react";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
export default function Logo() {
  return (
    <div className="flex items-center w-full gap-3 py-8">
      <div className="flex items-center">
      <MdOutlineAccountBalanceWallet className="text-2xl text-purple-400"/>
      </div>
      <span className=" text-2xl font-bold leading-5 text-gray-700">TillPro</span>
    </div>
  );
}
