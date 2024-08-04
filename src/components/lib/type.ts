import React from "react";
import { FaPersonPregnant } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
import { FaPrint } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";

export const navigationItem = [
    {
      title: "Dashboard",
      icon: React.createElement(MdSpaceDashboard),
      href: "/dashboard",
    },
    {
      title: "Print",
      icon: React.createElement(FaPrint),
      children: [
        {
          name: "PrintForm",
          href: "/printform",
        },
        {
          name: "PrintList",
          href: "/printlist",
        },
      ],
    },
    {
        title: "Invoice",
        icon: React.createElement(FaFileInvoice ),
        children: [
          {
            name: "InvoiceForm",
            href: "/invoiceform",
          },
          {
            name: "InvoiceList",
            href: "invoicelist",
          },
        ],
      },
      {
        title: "Balance",
        icon: React.createElement(FaBalanceScale),
        children: [
          {
            name: "Balance",
            href: "/balance",
          },
          {
            name: "Settlement",
            href: "/settlement",
          },
        ],
      },
      {
        title: "Clients",
        icon: React.createElement(FaPersonPregnant),
        children: [
          {
            name: "ClientForm",
            href: "/clientform",
          },
          {
            name: "ClientList",
            href: "/clientlist",
          },
        ],
      },
      {
        title: "Settings",
        icon: React.createElement(IoMdSettings),
        href: "/setting",
      },
      {
        title: "About Us",
        icon: React.createElement(PiPersonArmsSpreadFill),
        href: "/aboutus",
      },
      {
        title: "Log Out",
        icon: React.createElement(TbLogout),
        href: "#",
      },
     
    // ...
  ];