import {
  Award,
  GraduationCap,
  BookOpen,
  FileText,
  Lightbulb,
  Users,
} from "lucide-react";
import PrestasiSummary from "../../components/PencapaianPage/PrestasiSummary";
import PrestasiCategory from "../../components/PencapaianPage/PrestasiCategory";

function PrestasiPage() {
  return (
    <div className="w-full bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 border-b border-gray-300 pb-2">
        <Award className="w-12 h-12 text-red-700" />
        <h1 className="text-3xl font-bold text-gray-400 tracking-wide">
          Pengalaman Belajar dan Prestasi
        </h1>
      </div>

      {/* SKS dan Poin */}
      <PrestasiSummary />

      {/* Pengalaman Belajar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PrestasiCategory
          icon={<BookOpen className="w-7 h-7 text-green-600" />}
          title="Program Pembinaan Mahasiswa"
          items={[
            "Program Kreativitas Mahasiswa (PKM) (0)",
            "Program Pembinaan Mahasiswa Wirausaha (P2MW) (0)",
            "Program Penguatan Kapasitas Organisasi Kemahasiswaan (PPK Ormawa) (0)",
            "Program Pengalaman Lainnya (0)",
          ]}
        />
        <PrestasiCategory
          icon={<FileText className="w-7 h-7 text-yellow-600" />}
          title="Pengalaman Berdasarkan Durasi"
          items={[
            "Program Berdasarkan Proses Selama 1 Semester (0)",
            "Program Berdasarkan Durasi Waktu (0)",
          ]}
        />
        <PrestasiCategory
          icon={<Award className="w-7 h-7 text-purple-600" />}
          title="Prestasi dan Lomba"
          items={["Kompetisi (0)", "Festival (0)"]}
        />
        <PrestasiCategory
          icon={<Lightbulb className="w-7 h-7 text-orange-600" />}
          title="Pengembangan Diri"
          items={[
            "Pelatihan atau Workshop (0)",
            "Kreativitas Kecendekiaan (0)",
          ]}
        />
        <PrestasiCategory
          icon={<GraduationCap className="w-7 h-7 text-pink-600" />}
          title="Pengalaman Akademik"
          items={[
            "Kegiatan Asistensi Bersama Dosen (0)",
            "Kepeloporan dalam Bidang Akademik (0)",
          ]}
        />
        <PrestasiCategory
          icon={<Users className="w-7 h-7 text-teal-600" />}
          title="Organisasi dan Sertifikasi"
          items={[
            "Jabatan dalam Organisasi (0)",
            "Kepanitiaan (0)",
            "Sertifikat Kompetensi dan HKI (0)",
          ]}
        />
      </div>
    </div>
  );
}

export default PrestasiPage;
