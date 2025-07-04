import { User, School } from "lucide-react";

function BiodataContent({ activeTab }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      {activeTab === "Data Diri" && (
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <User className="w-5 h-5 text-red-700" />
            Data Diri
          </h2>
          <p className="text-gray-600 text-sm">Tampilkan data diri di sini.</p>
        </div>
      )}

      {activeTab === "Data Sekolah" && (
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <School className="w-5 h-5 text-red-700" />
            Data Sekolah
          </h2>
          <p className="text-gray-600 text-sm">
            Tampilkan data sekolah di sini.
          </p>
        </div>
      )}
    </div>
  );
}

export default BiodataContent;
