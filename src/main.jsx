import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";



import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Checkout from "./pages/Checkout.jsx";
import Perfil from "./pages/Perfil.jsx";
import { formatarMoeda } from "./utils/formatters.js";
import CriarConta from "./pages/CriarConta.jsx";
import Pagamento from "./pages/Pagamento.jsx";

// Contexto global acessível a todas as rotas
export const GlobalContext = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext.Provider value={{ formatarMoeda }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/perfil" element={<Perfil />} />
          <Route path="/CriarConta" element={<CriarConta/>} />
          <Route path="/Pagamento" element={<Pagamento/>} />
          

        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  </React.StrictMode>
);
