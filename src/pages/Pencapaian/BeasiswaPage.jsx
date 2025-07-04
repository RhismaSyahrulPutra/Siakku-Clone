import React from "react";
import { Award, GraduationCap, FileText } from "lucide-react";
import BeasiswaTable from "../../components/PencapaianPage/BeasiswaTable";
import beasiswaData from "../../data/BeasiswaData";
import columns from "../../data/BeasiswaColumn";

function BeasiswaPage() {
  return (
    <div className="w-full bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 border-b border-gray-300 pb-2">
        <Award className="w-12 h-12 text-red-700" />
        <h1 className="text-3xl font-bold text-gray-400 tracking-wide">
          Beasiswa
        </h1>
      </div>

      {/* Beasiswa Summary */}
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-6 mb-6 flex justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <GraduationCap className="w-10 h-10 text-blue-600" />
          <div>
            <h2 className="text-sm font-medium mb-1 text-gray-700">
              Total Beasiswa
            </h2>
            <p className="text-sm text-gray-500">
              {beasiswaData.length} Beasiswa
            </p>
          </div>
        </div>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Panduan Pengajuan Beasiswa
        </button>
      </div>

      {/* Daftar Beasiswa */}
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-7 h-7 text-green-600" />
          <h2 className="text-sm font-semibold text-gray-700">
            Daftar Beasiswa
          </h2>
        </div>

        {/* Tabel Beasiswa */}
        <BeasiswaTable data={beasiswaData} columns={columns} />
      </div>
    </div>
  );
}

export default BeasiswaPage;
