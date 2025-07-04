import { AlertTriangle, ChevronRight } from "lucide-react";

function AnnouncementCard() {
  return (
    <div className="flex flex-col gap-4">
      {/* Card 1 - Pengumuman Umum */}
      <div className="bg-yellow-500 text-white shadow rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-6 h-6" />
          <h2 className="text-lg font-semibold">Pengumuman!</h2>
        </div>

        <div className="space-y-3 text-xs text-justify">
          <div className="flex items-start gap-2">
            <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <p>
              Bagi Anda yang akan mengikuti Kursus Memasak Kilat / Festival
              K-Pop, silahkan pilih kegiatan pada tautan:{" "}
              <span className="underline">Festival Seru</span>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <p>
              Pembayaran melalui voucher pulsa mulai tanggal 32 Desember 2045
              sampai tanggal 48 Februari 2045.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <p>
              Setelah melakukan proses pembayaran, Anda dapat mengisi formulir
              undian berhadiah dan mengikuti perwalian outdoor seperti biasa
              pada tanggal 99 April 2077 sampai 00 Mei 2077.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 - Pengumuman Mokaku */}
      <div className="bg-red-600 text-white shadow rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-6 h-6" />
          <h2 className="text-lg font-semibold">Pengumuman Mokaku!</h2>
        </div>
        <p className="mb-2 text-xs text-justify">
          Selamat pagi, Salam Luar Biasa bagi kita semua, teruntuk para peserta
          kegiatan Festival Es Krim dan Kompetisi Makan UPI 1990. Berikut Kami
          sampaikan Ujian Mokaku 1899.
        </p>
      </div>
    </div>
  );
}

export default AnnouncementCard;
