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
      navigate("/"); // redireciona para a tela inicial
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
          INICIAR SESSÃO
        </h2>
      </div>
      <form onSubmit={handleLogin} className="form-login" style={{ zIndex: 1 }}>
        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="frmNome"
            style={{
              fontFamily: "monospace",
              fontSize: "24px",
              color: "#ffff",
            }}
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
              color: "#ffff",
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
            htmlFor="frmEmail"
            style={{
              fontFamily: "monospace",
              fontSize: "24px",
              color: "#ffff",
            }}
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
              color: "#ffff",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            type="email"
            name="frmEmail"
            id="frmEmail"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              width: "100%",
            }}
          >
            <button
              type="submit"
              className="btn btn w-50 mt-5"
              style={{
                backgroundColor: "#BE3144",
                height: "50px",
                fontFamily: "monospace",
                fontSize: "20px",
                color: "#ffff",
                borderRadius: "15px",
              }}
            >
              ENTRAR
            </button>
            <button
              className="btn btn w-50 mt-5"
              style={{
                backgroundColor: "#BE3144",
                height: "50px",
                fontFamily: "monospace",
                fontSize: "20px",
                color: "#ffff",
                borderRadius: "15px",
              }}
              onClick={() => navigate("/CriarConta")}
            >
              CRIAR CONTA →
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
