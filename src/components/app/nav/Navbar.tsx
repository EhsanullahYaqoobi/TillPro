import React from "react";
import NavSearchBox from "./NavSearchBox";
import Profile from "../profile/Profile";

export default function Navbar() {
  return (
    <div className="flex w-full border items-center bg-purple-400">
      <NavSearchBox />
      <Profile />
    </div>
  );
}
