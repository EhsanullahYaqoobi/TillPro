import Link from "next/link";
import React from "react";

type HeaderProps = {
  title: string;
  subtitle: string;
  icon: React.ReactElement;
  name: string;
  className?: string;
  linkProps?: React.ComponentProps<typeof Link>;
};

interface HeaderPropsData {
    data: HeaderProps;
}

export default function Header({data }: HeaderPropsData) {
  return (
    <div className="bg-gray-200 flex justify-between w-full py-5 rounded px-5">
      <h1 className="text-xl font-bold text-gray-700">{data.title}</h1>
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-semibold text-gray-700">{data.subtitle}</h1>
        <span className="text-gray-600 text-xl">{data.icon}</span>

        <Link href="/reciept" {...data.linkProps}>
          <h2 className="font-bold text-md text-gray-600">{data.name}</h2>
        </Link>
      </div>
    </div>
  );
}
