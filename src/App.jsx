import { Routes, Route } from "react-router-dom";

// Not Found
import NotfoundPage from "./pages/NotFound/NotfoundPage";
// Pages
import FrontPage from "./pages/FrontPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import NewsPage from "./pages/NewsPage";
import CalendarPage from "./pages/CalendarPage";
import BiodataPage from "./pages/Profile/BiodataPage";
import RiwayatKesehatanPage from "./pages/Profile/RiwayatKesehatanPage";
import BeasiswaPage from "./pages/Pencapaian/BeasiswaPage";
import PrestasiPage from "./pages/Pencapaian/PrestasiPage";
import EktmPage from "./pages/EktmPage";

// Layout
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<FrontPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes with Layout */}
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="berita" element={<NewsPage />} />
        <Route path="kalender" element={<CalendarPage />} />

        {/* Profile */}
        <Route path="profil/biodata" element={<BiodataPage />} />
        <Route
          path="profil/riwayat-kesehatan"
          element={<RiwayatKesehatanPage />}
        />

        {/* Pencapaian */}
        <Route path="pencapaian/beasiswa" element={<BeasiswaPage />} />
        <Route path="pencapaian/prestasi" element={<PrestasiPage />} />

        {/* E-KTM */}
        <Route path="ektm" element={<EktmPage />} />

        {/* Not Found Route - Harus di dalam Layout */}
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
