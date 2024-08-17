import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

type SidebarItem = {
  icon: React.ReactNode;
  label: string;
  href: string;
  subMenuItems?: {
    label: string;
    href: string;
  }[];
};

type SidebarItemProps = {
  isOpen: boolean;
  items: SidebarItem[];
};

export default function Sidebar({ isOpen, items }: SidebarItemProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const togglePanel = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    setHoveredIndex(index);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!event.target) return;
      const target = event.target as HTMLElement;
      const sidebar = document.querySelector(".flex");
      if (!sidebar?.contains(target)) {
        setOpenIndex(null);
        setHoveredIndex(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="block">
      <ul className="flex flex-col w-full gap-5 pl-3">
        {items.map((item, index) => (
          <div key={index}>
            <li
              className={`relative text-gray-600 p-2 rounded-l-full ${
                hoveredIndex === index
                  ? "bg-white text-purple-400"
                  : "hover:bg-white hover:text-purple-400"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="w-full flex items-end justify-between">
                <Link href={item.href}>
                  <span className="flex items-center gap-2">
                    <span>{item.icon}</span>
                    {isOpen && <span>{item.label}</span>}
                  </span>
                </Link>
                {item.subMenuItems && (
                  <span className="">
                    <ChevronDownIcon
                      className={`size-5 fill-gray-600 group-data-[hover]:fill-gray w-14 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      onClick={() => togglePanel(index)}
                    />
                  </span>
                )}
                <span
                  className={`ring-panel after:content-[''] ${
                    hoveredIndex === index &&
                    "bg-transparent absolute w-12 h-12 -top-12 right-0 rounded-[50%] shadow-[35px_35px_0_10px_theme(colors.white)] pointer-events-none"
                  }`}
                ></span>
                <span
                  className={`ring-panel after:content-[''] ${
                    hoveredIndex === index &&
                    "bg-transparent absolute w-12 h-12 -bottom-12 right-0 rounded-[50%] shadow-[35px_-35px_0_10px_theme(colors.white)] pointer-events-none"
                  }`}
                ></span>
              </button>
            </li>
            {item.subMenuItems && openIndex === index && (
              <li className="-mt-1">
                <ul>
                  {item.subMenuItems?.map((subItem, subItemIndex) => (
                    <li
                      key={subItemIndex}
                      className="text-gray-600 p-2 hover:bg-white rounded-l-full"
                    >
                      <a
                        href={subItem.href}
                        className="flex items-center gap-2"
                      >
                        <span className="pl-5">{subItem.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
