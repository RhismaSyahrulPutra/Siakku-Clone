import {
  Home,
  PieChart,
  FileText,
  Calendar,
  User,
  BookOpen,
  Mail,
  DollarSign,
  GraduationCap,
  Award,
  Briefcase,
  CreditCard,
} from "lucide-react";

const menuItems = [
  { label: "Beranda", icon: Home, path: "/home" },
  { label: "Dashboard", icon: PieChart, path: "/dashboard" },
  { label: "Berita", icon: FileText, path: "/berita" },
  { label: "Kalender Akademik", icon: Calendar, path: "/kalender" },
  {
    label: "Profil",
    icon: User,
    submenu: [
      { label: "Biodata", path: "/profil/biodata" },
      { label: "Riwayat Kesehatan", path: "/profil/riwayat-kesehatan" },
    ],
  },
  {
    label: "Rencana Studi",
    icon: BookOpen,
    submenu: [
      { label: "IRS", path: "/rencana-studi/irs" },
      { label: "PRS", path: "/rencana-studi/prs" },
      { label: "KRS", path: "/rencana-studi/krs" },
      { label: "Pesan", path: "/rencana-studi/pesan" },
    ],
  },
  {
    label: "Hasil Studi",
    icon: Mail,
    submenu: [
      { label: "Status Akademis", path: "/hasil-studi/status-akademis" },
      { label: "Nilai", path: "/hasil-studi/nilai" },
      { label: "Transkrip Sementara", path: "/hasil-studi/transkrip" },
    ],
  },
  {
    label: "Pembayaran",
    icon: DollarSign,
    submenu: [
      { label: "Riwayat Pembayaran", path: "/pembayaran/riwayat" },
      { label: "Tagihan", path: "/pembayaran/tagihan" },
    ],
  },
  {
    label: "Perkuliahan",
    icon: BookOpen,
    submenu: [
      { label: "Jadwal Kuliah", path: "/perkuliahan/jadwal" },
      { label: "Kehadiran Kuliah", path: "/perkuliahan/kehadiran" },
      { label: "Jadwal Sidang", path: "/perkuliahan/sidang" },
    ],
  },
  { label: "Beasiswa", icon: GraduationCap, path: "/beasiswa" },
  { label: "Prestasi", icon: Award, path: "/prestasi" },
  { label: "Cuti Kuliah", icon: Briefcase, path: "/cuti" },
  { label: "eKTM", icon: CreditCard, path: "/ektm" },
];

export default menuItems;
