import { useState } from "react";
import { IdCard } from "lucide-react";
import EktmCard from "../components/EktmPage/EktmCard";
import EktmModal from "../components/EktmPage/EktmModal";

function EktmPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 border-b border-gray-300 pb-2">
        <IdCard className="w-12 h-12 text-red-700" />
        <h1 className="text-3xl font-bold text-gray-400 tracking-wide">
          E-KTM
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EktmCard
          title="Kartu Mahasiswa"
          description="Menampilkan informasi Kartu Tanda Mahasiswa elektronik."
          buttonText="Lihat E-KTM"
          onClick={() => setIsModalOpen(true)}
        />
        <EktmCard
          title="Cetak Kartu"
          description="Unduh dan cetak Kartu Tanda Mahasiswa dalam format PDF."
          buttonText="Unduh E-KTM"
          onClick={() => alert("Fitur unduh belum tersedia.")}
        />
      </div>

      {/* Modal */}
      {isModalOpen && <EktmModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default EktmPage;
