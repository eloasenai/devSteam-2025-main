import { useNavigate } from "react-router";
import { GlobalContext } from "../main.jsx";
import React, { useState } from "react";

const CriarConta = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      style={{ position: "relative" }}
    >
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
          borderRadius: "4px",
          flexDirection: "column",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <h2
          className="h-40 text-start"
          style={{
            fontFamily: "monospace",
            fontSize: "45px",
            color: "white",
            marginTop: "-6%",
          }}
        >
          CRIAR CONTA
        </h2>
      </div>
      <form onSubmit={handleLogin} className="form-login" style={{ zIndex: 1 }}>
        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="frmNome"
            style={{ fontFamily: "monospace", fontSize: "24px" }}
          >
            NOME
          </label>
          <input
            style={{
              width: "600px",
              height: "50px",
              backgroundColor: "#1F2B4E",
              borderColor: "#1F2B4E",
              borderRadius: "0px",
            }}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form-control"
            type="text"
            name="frmNome"
            id="frmNome"
          />
        </div>

        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="frmEmail "
            style={{ fontFamily: "monospace", fontSize: "24px" }}
          >
            E-MAIL
          </label>
          <input
            style={{
              width: "600px",
              height: "50px",
              backgroundColor: "#1F2B4E",
              borderColor: "#1F2B4E",
              borderRadius: "0px",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            type="email"
            name="frmEmail"
            id="frmEmail"
          />
          <label
            htmlFor="frmSenha"
            className="form-label"
            htmlFor="frmEmail "
            style={{ fontFamily: "monospace", fontSize: "24px" }}
          >
            SENHA
          </label>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              width: "100%",
            }}
          >
            <input
              type="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              name="frmSenha"
              id="frmSenha"
              style={{
                width: "600px",
                height: "50px",
                backgroundColor: "#1F2B4E",
                borderColor: "#1F2B4E",
                borderRadius: "0px",
              }}
            ></input>
          </div>
        </div>
        <button
          className="btn btn w-100 mt-5"
          style={{
            backgroundColor: "#BE3144",
            height: "50px",
            fontFamily: "monospace",
            fontSize: "20px",
            color: "#ffff",
            borderRadius: "15px",
          }}
        >
          CRIAR
        </button>
      </form>
    </div>
  );
};

export default CriarConta;
