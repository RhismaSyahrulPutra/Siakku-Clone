import { HeartPulse } from "lucide-react";
import { useState } from "react";
import AccordionLeft from "../../components/ProfilePage/RiwayatKesehatanPage/AccordionLeft";
import AccordionRight from "../../components/ProfilePage/RiwayatKesehatanPage/AccordionRight";

function RiwayatKesehatanPage() {
  const [openAccordion, setOpenAccordion] = useState(1);
  const [openAccordionRight, setOpenAccordionRight] = useState(null);

  return (
    <div className="w-full bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 border-b border-gray-300 pb-2">
        <HeartPulse className="w-12 h-12 text-red-700" />
        <h1 className="text-3xl font-bold text-gray-400 tracking-wide">
          Data Riwayat Kesehatan
        </h1>
      </div>

      {/* 2 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kolom 1 */}
        <AccordionLeft
          openAccordion={openAccordion}
          setOpenAccordion={setOpenAccordion}
        />

        {/* Kolom 2 */}
        <AccordionRight
          openAccordionRight={openAccordionRight}
          setOpenAccordionRight={setOpenAccordionRight}
        />
      </div>
    </div>
  );
}

export default RiwayatKesehatanPage;
