import React from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";
import SidebarItem from "./SidebarItem";
import { sidebarItems } from "@/components/lib/type";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void; 
}

export default function Sidebar({isOpen, toggleSidebar}:SidebarProps) {
  return (
    <div className={`transition-all duration-300 ease-in-out h-full z-10 rounded-t-2xl my-2 bg-gray-200 ${
      isOpen ? "w-64" : "w-20"
    }`}>
      <div className="flex justify-between items-center px-2 pb-10">
        <Logo isOpen={isOpen} title={"TillPro"} />
        <FaBars className="text-xl cursor-pointer"  
        onClick={toggleSidebar}
        />
      </div>
      <SidebarItem isOpen={isOpen} items={sidebarItems} />
    </div>
  );
}