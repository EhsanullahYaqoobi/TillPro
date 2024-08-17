import React from "react";
import NavSearchBox from "./NavSearchBox";
import Profile from "../profile/Profile";
import BellBox from "./BellBox";
import MessageBox from "./MessageBox";
import SliderToggleMode from "./SliderToggleMode";

export default function Navbar() {
  return (
    <div className={`flex w-full border items-center h-[100px] px-2 rounded-t-3xl bg-gray-100
    `}>
      <NavSearchBox />
      <div className="flex  items-center justify-end w-full gap-5">
        <SliderToggleMode />
      <BellBox />
      <MessageBox />
      <Profile />
      </div>
    </div>
  );
}
