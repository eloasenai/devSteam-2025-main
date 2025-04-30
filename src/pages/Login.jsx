import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nome && email) {
      localStorage.setItem("devlogin", JSON.stringify({ nome, email }));
      navigate("/");
    }
  };
  
  return (
    <div
      className="container d-flex dvh-100 justify-content-center align-items-center py-5 w-50"
      style={{ position: "relative" }}>
        <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1000px",
          height: "600px",
          backgroundColor: "#09122C",
          zIndex: -1,
          borderRadius: "px",
        }}
      >
        <h2
        className="h-40"
        >Iniciar sessão</h2>
      </div>
      <form onSubmit={handleLogin} className="w-100" style={{ zIndex: 1 }}>
        <div className="mb-3">
          <label className="form-label" htmlFor="frmNome">
            Nome
          </label>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form-control"
            type="text"
            name="frmNome"
            id="frmNome"
            style={{ borderRadius: "5px", width:"100%", backgroundColor:"#1F2B4E" }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="frmEmail">
            E-mail
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control align-items-center"
            type="email"
            name="frmEmail"
            id="frmEmail"
            style={{ borderRadius: "5px", width:"100%", backgroundColor:"#1F2B4E" }}
          />
        </div>

        <button
          className="btn "
          style={{ borderRadius: "15px", backgroundColor: "#BE3144", width:"100%" }}
        >
          Entrar
        </button>
      </form>
      
    </div>
  );
};

export default Login;
