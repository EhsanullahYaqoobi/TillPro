import Image from "next/image";
import React from "react";
import ImageProfile from "../../../../public/images/Navbar/Ehsanullah_Yaqoobi.jpg";

export default function Profile() {
  return (
    <div className="">
      <div className="flex items-center gap-2">
      <span><h1 className="">EHsanullah YaqooBi</h1></span>
      <Image
        src={ImageProfile}
        alt=""
        width={300}
        height={300}
        className="w-12 h-12 rounded-full"
        />
        </div>
    </div>
  );
}
