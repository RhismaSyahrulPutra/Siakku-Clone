import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Tooltip from "@radix-ui/react-tooltip";
import menuItems from "../../data/MenuItems";
import { ChevronDown, ChevronUp } from "lucide-react";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [openMenus, setOpenMenus] = useState([]);
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

  const toggleMenu = label => {
    if (openMenus.includes(label)) {
      setOpenMenus(openMenus.filter(menu => menu !== label));
    } else {
      setOpenMenus([...openMenus, label]);
    }
  };

  return (
    <>
      {/* Overlay Mobile (tidak menghalangi navbar) */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 top-[64px]" // Navbar assumed height ~64px
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div
        className={`
          bg-base-100 px-2 py-4 transition-all duration-300 overflow-y-auto
          ${isSidebarOpen ? "w-60" : "w-20"}
          ${isMobile ? "fixed top-[64px] left-0 h-[calc(100%-64px)] z-40" : "relative"}
        `}
      >
        <ul className="menu text-base-content space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openMenus.includes(item.label);

            if (item.submenu) {
              return (
                <li key={index}>
                  <button
                    onClick={() => toggleMenu(item.label)}
                    className="flex items-center justify-between w-full gap-4 hover:bg-base-300 rounded px-2 py-2"
                  >
                    <div className="flex items-center gap-4">
                      {isSidebarOpen ? (
                        <div className="flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                      ) : (
                        <Tooltip.Root delayDuration={0}>
                          <Tooltip.Trigger asChild>
                            <div className="flex-shrink-0 cursor-pointer">
                              <Icon className="w-5 h-5" />
                            </div>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content
                              side="right"
                              className="bg-gray-900/80 text-white text-xs rounded px-2 py-1"
                            >
                              {item.label}
                              <Tooltip.Arrow className="fill-gray-800" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      )}

                      {isSidebarOpen && (
                        <span className="truncate whitespace-nowrap overflow-hidden">
                          {item.label}
                        </span>
                      )}
                    </div>
                    {isSidebarOpen &&
                      (isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      ))}
                  </button>

                  {isOpen && isSidebarOpen && (
                    <ul className="pl-4 py-2 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path}
                            className="block text-xs hover:bg-base-300 rounded py-2"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={index}>
                {isSidebarOpen ? (
                  <Link
                    to={item.path}
                    className="flex items-center gap-4 hover:bg-base-300 rounded px-2 py-2"
                  >
                    <div className="flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="truncate whitespace-nowrap overflow-hidden">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <Tooltip.Root delayDuration={0}>
                    <Tooltip.Trigger asChild>
                      <Link
                        to={item.path}
                        className="flex items-center gap-4 hover:bg-base-300 rounded px-2 py-2"
                      >
                        <div className="flex-shrink-0 cursor-pointer">
                          <Icon className="w-5 h-5" />
                        </div>
                      </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        side="right"
                        className="bg-gray-900/80 text-white text-xs rounded px-2 py-1"
                      >
                        {item.label}
                        <Tooltip.Arrow className="fill-gray-800" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
