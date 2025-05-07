import React from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../main.jsx";

export const Perfil = () => {
  const Navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "url(src/img/mario.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px",
          width: "1500px",
          height: "700px",
          backgroundColor: "#09122C",
          borderRadius: "4px",
        }}
      >
        {/* Ícone de perfil */}
        <i
          className="bi bi-person-circle"
          style={{
            fontSize: "100px",
            color: "#ffffff",
            marginBottom: "20px",
          }}
        ></i>
        {/* Conteúdo adicional */}
      </div>
    </div>
  );
};

export default Perfil;