"use client";
import { Lato } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/app/sidebar/Sidebar";
import NavbarPage from "./navbar/page";
import { ThemeProvider } from "@/app/ThemeContext";
import Footer from "@/components/app/footer/Footer";
import { useState } from "react";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(true); 

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <html lang="en" className="!scroll-smooth">
      <ThemeProvider>
        <body className={lato.className}>
          <div className="flex"> 
            <div className="fixed top-0 left-0 h-screen">
              <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            </div>
            <div className={`flex flex-col flex-grow px-2 py-2 ${isOpen ? 'pl-[16.5rem]' : 'pl-[5.5rem]'}`}>
              <NavbarPage />
              {children}
              <Footer />
            </div>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}