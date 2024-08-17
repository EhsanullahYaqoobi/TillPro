import React from "react";
import { BsSearchHeartFill } from "react-icons/bs";

export default function NavSearchBox() {
  return (
    <div className="flex py-2">
      <form action="" className="relative w-max mx-auto">
        <input
          type="search"
          name="search"
          id="search"
          className="relative peer z-10 bg-transparent w-12 h-12 rounded-full border cursor-pointer outline-none
          pl-12 pr-4
          focus:w-full focus:border-gray-300 focus:cursor-text focus:pl-16 focus:pr-4"
          placeholder="Search name or print . . ."
        />
        <BsSearchHeartFill
          className="absolute inset-y-0 h-8 w-12 my-auto px-3.5 border-r border-transparent
         text-red-300 peer-focus:border-gray-300"
        />
      </form>
    </div>
  );
}
