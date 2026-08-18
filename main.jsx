import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Registro from "./pages/Registro.jsx";
import Login from "./pages/Login.jsx";
import Candidato from "./pages/Candidato.jsx";
import Perfil from "./pages/Perfil.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/registro" element={<Registro />} />

        <Route path="/login" element={<Login />} />

        <Route path="/candidato" element={<Candidato />} />
       
        <Route path="/perfil" element={<Perfil />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);