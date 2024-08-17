import React from "react";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

type LogoProps ={
  title: string;
  isOpen: boolean;
}

export default function Logo({title, isOpen}:LogoProps) {
  return (
    <div className="flex items-center w-full gap-3 py-8 pl-2">
      <div className="flex items-center">
      <MdOutlineAccountBalanceWallet className="text-2xl hover:text-purple-400 text-gray-600"/>
      </div>
      {isOpen && <h2 className="text-lg font-bold text-gray-600">{title}</h2>}
    </div>
  );
}
