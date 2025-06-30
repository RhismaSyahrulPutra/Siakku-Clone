import { useState } from "react";
import { Outlet } from "react-router-dom";
import * as Tooltip from "@radix-ui/react-tooltip";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Tooltip.Provider>
      <div className="flex flex-col h-screen">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar isSidebarOpen={isSidebarOpen} />

          <div className="flex-1 p-4 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  );
}

export default Layout;
