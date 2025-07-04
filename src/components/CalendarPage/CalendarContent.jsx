import React from "react";

function CalendarContent({ activeTab, academicYears }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-6">
      <div className="text-gray-600 text-sm mt-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Kalender {activeTab}{" "}
            <span className="text-red-600 font-medium">
              (Tahun Akademik {academicYears[activeTab]})
            </span>
          </h2>
          <p>Isi jadwal atau kegiatan {activeTab.toLowerCase()} di sini.</p>
        </div>
      </div>
    </div>
  );
}

export default CalendarContent;
