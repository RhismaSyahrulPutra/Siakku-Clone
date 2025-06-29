import { Routes, Route } from "react-router-dom";

// Pages
import FrontPage from "./pages/FrontPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
