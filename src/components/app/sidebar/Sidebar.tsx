import React from "react";
import Logo from "./Logo";
import ItemPart from "./ItemPart";
import { navigationItem } from "@/components/lib/type";
import { FaBars } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className={`w-64 bg-gray-200 pl-2 h-screen`}>
      <div className="flex justify-between items-center px-2 pb-10">
        <Logo />
        <FaBars className="cursor-pointer hover:bg-gray-800 hover:text-white hover:p-1 hover:text-xl hover:rounded-sm hover:font-semibold" />
      </div>
      <ItemPart navigation={navigationItem} />
    </div>
  );
}
