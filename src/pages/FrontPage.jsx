import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SiakkuLogo from "../assets/Siakku_Logo.svg";
import { LogIn, FileText } from "lucide-react";

// Components
import AlertCard from "../components/FrontPage/AlertCard";
import Announcement from "../components/FrontPage/Announcement";
import TelegramInfo from "../components/FrontPage/TelegramInfo";
import ServicesAccordion from "../components/FrontPage/ServicesAccordion";

function FrontPage() {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-red-800 via-red-700 to-red-600 text-white p-8 flex flex-col lg:flex-row gap-12">
      {/* Column 1 */}
      <div className="flex flex-col items-start gap-6 flex-1">
        <img src={SiakkuLogo} alt="SIAKKu Logo" className="w-96" />

        <p className="max-w-2xl text-sm text-justify mb-2">
          Portal SIAK Mahasiswa UPI Terintegrasi ini adalah satu-satunya layanan
          akademik untuk mahasiswa UPI yang memuat seluruh aktifitas utama
          administrasi akademik. Sistem ini menggunakan Single Sign On UPI
          sebagai fitur otentifikasi.
        </p>

        <AlertCard />

        <button
          onClick={handleNavigate}
          className="w-full bg-yellow-400 text-red-700 font-semibold px-6 py-3 rounded-xl hover:bg-yellow-500 transition flex items-center justify-center gap-2 mb-3"
        >
          <LogIn className="w-5 h-5" />
          Go to Login
        </button>

        <button className="w-full bg-white text-red-700 font-semibold px-6 py-3 rounded-xl hover:bg-red-100 transition flex items-center justify-center gap-2">
          <FileText className="w-5 h-5" />
          Pengajuan Angsuran UKT
        </button>
      </div>

      {/* Column 2 */}
      <div className="flex-1 flex flex-col gap-6 max-w-3xl">
        <Announcement />
        <TelegramInfo />
        <ServicesAccordion
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
        />
      </div>
    </div>
  );
}

export default FrontPage;
