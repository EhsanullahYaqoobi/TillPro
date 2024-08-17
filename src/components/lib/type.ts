import React from "react";
import { FaPersonPregnant } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { FaPrint } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
import { icons } from "@tabler/icons-react";
import { GoTriangleRight } from "react-icons/go";

export const sidebarItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: React.createElement(MdSpaceDashboard),
  },
  {
    label: "Print",
    href: "/print",
    icon: React.createElement(FaPrint),
    subMenuItems: [
      {
        label: "PrintForm",
        href: "/print/inputfield",
      },
      {
        label: "Table Print",
        href: "/print/displaytable",
      },
    ],
  },
  {
    label: "Invoice",
    href: "/invoice",
    icon: React.createElement(FaFileInvoice),
    subMenuItems: [
      {
        label: "Invoice List",
        href: "/invoicelist",
      },
    ],
  },
  {
    label: "Balance",
    href: "/balance",
    icon: React.createElement(FaBalanceScale),
    subMenuItems: [
      {
        label: "BalanceForm",
        href: "/printbalance",
      },
    ],
  },
  {
    label: "Language",
    href: "/language",
    icon: React.createElement(FaLanguage),
    subMenuItems: [
      {
        label: "English",
        href: "/english",
      },
      {
        label: "Persian",
        href: "/persian",
      },
    ],
  },
  {
    label: "Clients",
    href: "/client",
    icon: React.createElement(FaPersonPregnant),
    subMenuItems: [
      {
        label: "ClientForm",
        href: "/clientform",
      },
    ],
  },
  {
    label: "Settings",
    href: "/settings",
    icon: React.createElement(IoMdSettings),  },
];
export const data = [
  { id: 1, name: "ID" },
  { id: 2, name: "Name" },
  { id: 3, name: "Amount" },
  { id: 4, name: "Date" },
  { id: 5, name: "Print ID" },
  { id: 6, name: "Serial ID" },
  { id: 7, name: "Checked" },
  { id: 8, name: "Actions" },
];
export const FloatingDockData = [
  {
    title: "Facebook",
    icon: React.createElement(FaFacebookSquare),
    href: "https://www.facebook.com/",
  },
  {
    title: "Github",
    icon: React.createElement(FaGithubSquare),
    href: "https://www.github.com/",
  },
  {
    title: "XTwitter",
    icon: React.createElement(FaSquareXTwitter),
    href: "https://www.XTwitter.com/",
  },
  {
    title: "Linkedin",
    icon: React.createElement(FaLinkedin),
    href: "https://www.Linkedin.com/",
  },
  {
    title: "Google",
    icon: React.createElement(FaGooglePlusSquare),
    href: "https://www.Google.com/",
  },
]
export const HeaderData = {
  title: "Print Inputs",
  subtitle: "Print",
  icon: React.createElement(GoTriangleRight),
  name: "Table",
}