"use client";
import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function SwitchMode() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-black p-1 transition-colors duration-200 ease-in-out 
      focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-gray-400 ring-0 shadow-lg transition duration-200 
        ease-in-out group-data-[checked]:translate-x-7"
      />
    </Switch>
  );
}
