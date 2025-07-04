import { GraduationCap } from "lucide-react";

function PrestasiSummary() {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-6 mb-6 flex justify-between items-center gap-4">
      {/* Kiri */}
      <div className="flex items-center gap-4">
        <GraduationCap className="w-10 h-10 text-blue-600" />
        <div>
          <h2 className="text-sm font-medium mb-1 text-gray-700">
            Perolehan SKS dan Poin
          </h2>
          <p className="text-sm text-gray-500">0 SKS | 0 Poin</p>
        </div>
      </div>

      {/* Kanan */}
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
        Pedoman Pengakuan Belajar & Prestasi
      </button>
    </div>
  );
}

export default PrestasiSummary;
