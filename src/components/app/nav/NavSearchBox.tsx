import React from "react";

export default function NavSearchBox() {
  return (
    <div className="flex w-[25%]">
      <input
        type="text"
        className="text-sm p-2 outline-none border border-slate-200 w-80 rounded-lg hover:border-2 hover:border-blue-500"
        placeholder="Search here . . ."
      />
    </div>
  );
}
