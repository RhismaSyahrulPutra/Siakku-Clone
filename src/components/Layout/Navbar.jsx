import { useState, useRef, useEffect } from "react";
import { Menu, Pencil, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import navbar_logo from "../../assets/Siakku_Navbar.svg";

function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  // Close when click outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar bg-white shadow-sm px-4 flex justify-between items-center relative">
      <div className="flex items-center gap-10">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2"
        >
          <Menu className="w-6 h-6" />
        </button>
        <img src={navbar_logo} alt="Siakku Night Logo" className="w-32" />
      </div>

      {/* Hanya Foto Profil + Badge */}
      <div
        ref={profileRef}
        className="relative cursor-pointer"
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      >
        <div className="w-8 h-8 rounded-full mr-6">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
          {/* Badge bulat */}
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full mr-6"></span>
        </div>

        {/* Dropdown Menu */}
        {isProfileOpen && (
          <div className="absolute top-12 right-0 bg-white shadow-lg border rounded p-4 space-y-2 z-50 w-64 text-center text-xs">
            <div className="space-y-1">
              <p className="font-medium">JHON DOE</p>
              <p className="text-gray-500">(12345678)</p>
              <p className="text-gray-500">Pendidikan Ilmu Hitam</p>
            </div>

            <div className="flex flex-col space-y-2 mt-3">
              <button
                className="flex items-center justify-center gap-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => navigate("/profil/biodata")}
              >
                <Pencil className="w-4 h-4" />
                Edit Profile
              </button>
              <button
                className="flex items-center justify-center gap-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => navigate("/")}
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
