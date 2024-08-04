'use client';
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

interface DisclosureProps {
  navigation: Array<{
    title: string;
    icon?: React.JSX.Element;
    href?: string;
    children?: Array<{
      name: string;
      href: string;
    }>;
  }>;
}

export default function ItemPart({ navigation }: DisclosureProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const togglePanel = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <ul className="flex flex-col gap-5">
        {navigation.map((item, index) => {
          const isOpen = openIndex === index;
          if (item.children) {
            return (
              <li key={index}>
                <button
                  className="group flex w-full items-center justify-between p-2 hover:bg-white rounded-l-full hover:text-purple-400"
                  onClick={() => togglePanel(index)}
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-sm font-medium text-gray-600 ">
                      {item.title}
                    </span>
                  </span>
                  <ChevronDownIcon
                    className={`size-5 fill-gray-600 group-data-[hover]:fill-gray ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="panel text-gray-600 cursor-pointer pl-5 flex flex-col">
                    {item.children.map((child, childIndex) => (
                      <div key={childIndex} className="hover:bg-white p-1 rounded-l-full px-3 text-sm">
                        <Link href={child.href}>{child.name}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            );
          }
          return (
            <li
              key={index}
              className="flex items-center gap-2 hover:text-purple-400 py-2 hover:bg-white rounded-l-full px-2 cursor-pointer"
              onClick={() => togglePanel(index)}
            >
              {item.icon}
              <a href={item.href} className="block text-gray-600">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}