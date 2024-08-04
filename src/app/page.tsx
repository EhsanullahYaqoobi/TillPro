import React from "react";
import SidebarPage from "./sidebar/page";
import DashboardPage from "./dashboard/page";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen">
      <div className="w-64">
        <SidebarPage />
      </div>
      <div>
        <DashboardPage />
      </div>
    </main>
  );
}
