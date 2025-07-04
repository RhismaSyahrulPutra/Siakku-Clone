import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import ilustrasi from "../../assets/404_image.svg";

function NotfoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 text-center p-6">
      <img
        src={ilustrasi}
        alt="Halaman tidak ditemukan"
        className="w-[400px] mb-6"
      />
      <button
        onClick={() => navigate("/home")}
        className="flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        <Home className="w-4 h-4" />
        Kembali ke Beranda
      </button>
    </div>
  );
}

export default NotfoundPage;
