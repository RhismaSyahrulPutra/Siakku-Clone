import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import "./styles/index.css";
import App from "./App.jsx";

registerSW({
  immediate: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Siakku-Clone">
      <App />
    </BrowserRouter>
  </StrictMode>
);
