import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import * as Tooltip from "@radix-ui/react-tooltip";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set awal

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Tooltip.Provider>
      <div className="flex flex-col h-screen">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />

          {/* Konten utama dengan margin dinamis */}
          <div
            className={`
    flex-1 p-4 overflow-auto transition-all duration-300
    ml-0
  `}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  );
}

export default Layout;
