import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function AccordionLeft({ openAccordion, setOpenAccordion }) {
  const toggleAccordion = index => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-6">
        <h2 className="text-lg font-bold mb-4">Instrumen Kesehatan Mental</h2>

        {/* Accordion 1 */}
        <div className="border border-gray-300 rounded-lg mb-4">
          <button
            onClick={() => toggleAccordion(1)}
            className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            <span>Pendahuluan</span>
            {openAccordion === 1 ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {openAccordion === 1 && (
            <div className="px-4 py-3 bg-yellow-400 text-xs text-justify text-yellow-900 space-y-2 rounded-b-lg">
              <p>
                Instrumen ini bertujuan untuk mengetahui kondisi kesehatan
                mental mahasiswa dalam 2 minggu terakhir.
              </p>
              <p>
                Instrumen deteksi kesehatan mental ini disusun berdasarkan teori
                Lovibond & Lovibond (1995)...
              </p>
              <p>Tidak ada jawaban benar maupun salah dalam instrumen ini...</p>
              <p>
                Pengisian instrumen ini tidak terdapat risiko yang berbahaya...
              </p>
              <p>
                Jawaban yang Anda berikan akan dijaga kerahasiaannya oleh Badan
                BKPK UPI.
              </p>
              <p className="font-semibold">Terima kasih.</p>
            </div>
          )}
        </div>

        {/* Accordion 2 */}
        <div className="border border-gray-300 rounded-lg mb-4">
          <button
            onClick={() => toggleAccordion(2)}
            className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            <span>Mulai Tes</span>
            {openAccordion === 2 ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {openAccordion === 2 && (
            <div className="px-4 py-3 text-gray-600 space-y-4">
              <p className="text-justify text-xs">
                Klik tombol di bawah untuk memulai tes kesehatan mental Anda.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Mulai Tes Mental
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccordionLeft;
