import AccordionItem from "./AccordionItem";

function ServicesAccordion({ activeAccordion, setActiveAccordion }) {
  return (
    <div className="bg-white text-red-700 p-6 rounded-xl shadow-lg w-full flex flex-col gap-4">
      <AccordionItem
        id="informasi"
        title="Pelayanan Informasi Publik"
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
        className="text-black"
      >
        Jika anda memiliki kebutuhan mengenai informasi, silahkan menghubungi
        Unit Layanan Terpadu UPI, dengan membuat laporan pada tautan{" "}
        <a
          href="https://laporan-ult.upi.edu/lapor"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          https://laporan-ult.upi.edu/lapor
        </a>{" "}
        atau surel: layananult@upi.edu.
      </AccordionItem>

      <AccordionItem
        id="pembayaran"
        title="Pelayanan Tagihan & Pembayaran"
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
        className="text-black"
      >
        Jika anda memiliki permasalahan yang berhubungan dengan tagihan dan
        pembayaran, silakan menghubungi Direktorat Keuangan UPI. Email:
        dir_keuangan@upi.edu, Whatsapp: 08112002828 (Chat Only)
      </AccordionItem>

      <AccordionItem
        id="akademik"
        title="Pelayanan Administrasi Akademik"
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
        className="text-black"
      >
        Jika anda memiliki permasalahan yang berhubungan dengan Administrasi
        Akademik, silakan menghubungi Direktorat Pendidikan UPI. Email:
        dir_pendidikan@upi.edu, Telepon: 022-2013757 (Jam & Hari Kerja),
        Whatsapp: 081370071229 (Chat Only) (Jam & Hari Kerja)
      </AccordionItem>

      <AccordionItem
        id="akun"
        title="Pelayanan Akun UPI"
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
        className="text-black"
      >
        Perbaikan akun & penggantian password dapat dilakukan di Direktorat
        Sistem dan Teknologi Informasi UPI. Telepon: 022-2005320 ext. 1147
        (Internal), email: layanan-tik@upi.edu, Whatsapp/SMS: 08112011007 atau
        08112291229 (Jam & Hari Kerja)
      </AccordionItem>
    </div>
  );
}

export default ServicesAccordion;
