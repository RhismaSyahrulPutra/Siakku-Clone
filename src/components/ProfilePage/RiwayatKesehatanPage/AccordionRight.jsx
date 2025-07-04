import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function AccordionRight({ openAccordionRight, setOpenAccordionRight }) {
  const toggleAccordionRight = index => {
    if (openAccordionRight === index) {
      setOpenAccordionRight(null);
    } else {
      setOpenAccordionRight(index);
    }
  };

  const formItems = [
    "I. Riwayat Penyakit",
    "II. Kebiasaan",
    "III. Riwayat Vaksinasi",
    "IV. Asuransi Kesehatan",
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-6">
        <h2 className="text-lg font-bold mb-4">Formulir Riwayat Kesehatan</h2>
        <p className="text-xs text-gray-600 mb-4 text-justify">
          Formulir ini berisi pernyataan mengenai Riwayat Kesehatan serta
          keikutsertaan dalam program Asuransi pada Mahasiswa Universitas
          Pendidikan Indonesia.
        </p>

        {/* Accordion List */}
        {formItems.map((title, index) => (
          <div key={index} className="border border-gray-300 rounded-lg mb-4">
            <button
              onClick={() => toggleAccordionRight(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              <span>{title}</span>
              {openAccordionRight === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {openAccordionRight === index && (
              <div className="px-4 py-3 text-xs text-gray-600">
                <p>Isi data {title.toLowerCase()} di sini.</p>
              </div>
            )}
          </div>
        ))}

        {/* Pernyataan dan Tombol */}
        <div className="mt-6 p-4 bg-yellow-400 rounded-lg text-xs text-justify text-yellow-900 space-y-2">
          <p>
            Dengan ini Saya menyatakan bahwa pernyataan yang saya buat di atas
            adalah benar. Apabila terdapat ketidaksesuaian dengan keadaan yang
            sebenarnya, Saya bersedia untuk menerima sanksi dari Universitas
            Pendidikan Indonesia.
          </p>
          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Tidak Setuju
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccordionRight;
