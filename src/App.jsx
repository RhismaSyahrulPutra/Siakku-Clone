import { Routes, Route } from "react-router-dom";

// Pages
import FrontPage from "./pages/FrontPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

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
        {/* Tambahkan halaman dashboard lainnya di sini */}
      </Route>
    </Routes>
  );
}

export default App;
